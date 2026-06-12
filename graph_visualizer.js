/**
 * ============================================================
 * AMEVA Edge-Native AI Dashboard — Graph Visualizer (D3.js)
 * ============================================================
 * 
 * Handles rendering the interactive Force-directed graph representing
 * the AMEVA codebase and ecosystem using D3.js.
 */

// We assume D3 is available globally via the CDN script tag.
// If using a bundler later, this would be: import * as d3 from 'd3';

const container = document.getElementById('graph-container');
const placeholder = document.getElementById('graph-placeholder');

// Color palette mapping to Supabase x Obsidian aesthetic
const colorScale = d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range([
    '#7C3AED', // Root - Obsidian Purple
    '#3ECF8E', // LLM - Supabase Green
    '#00EFFF', // RAG - Cyan
    '#F59E0B', // Vis - Amber
    '#EF4444'  // Python - Red
  ]);

let svg, simulation, link, node, labels;

/**
 * Initialize the graph by loading the JSON data
 */
export async function initGraph() {
  try {
    // 1. Fetch from GitHub API dynamically
    const username = 'uno-km'; // GitHub username
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    
    let data;
    
    if (response.ok) {
      const repos = await response.json();
      
      // 2. Build Hierarchy: Root -> Categories -> Repos
      // 2. Build Hierarchy: Root -> Categories -> Repos
      const nodes = [
        { id: "AMEVA Universe", group: 1, radius: 28, description: "Root Ecosystem" },
        { id: "LLM", group: 2, radius: 20, description: "Large Language Models & AI" },
        { id: "LLM Applications", group: 2, radius: 16, description: "Applied LLM Services" }, // Child of LLM
        { id: "STT", group: 3, radius: 20, description: "Speech to Text & Voice" },
        { id: "Multiplex Applications", group: 4, radius: 20, description: "Complex Application Orchestration" }, // New Category under root
        { id: "Social Research", group: 4, radius: 20, description: "Socio-technological AI Research" }, // New Category under root
        { id: "MLOps", group: 5, radius: 20, description: "Machine Learning Operations" }
      ];
      
      const links = [
        { source: "AMEVA Universe", target: "LLM", value: 3 },
        { source: "AMEVA Universe", target: "STT", value: 3 },
        { source: "AMEVA Universe", target: "MLOps", value: 3 },
        { source: "AMEVA Universe", target: "Multiplex Applications", value: 3 },
        { source: "AMEVA Universe", target: "Social Research", value: 3 },
        { source: "LLM", target: "LLM Applications", value: 2 }
      ];

      repos.forEach(repo => {
        const name = repo.name;
        
        // 1. "AMEVA" 대문자 프리픽스가 있는 레포지토리만 필터링
        if (!name.startsWith('AMEVA')) return;

        const nameUpper = name.toUpperCase();
        
        // Categorization logic
        let targetCategory = "AMEVA Universe"; // Fallback
        
        if (nameUpper.includes('STT-TRAINER') || nameUpper.includes('STT')) {
           targetCategory = "STT";
        } else if (nameUpper.includes('LLM-TRAINER')) {
           targetCategory = "LLM";
        } else if (nameUpper.includes('DOC-AI') || nameUpper.includes('BENCHMARK-SUITE') || nameUpper.includes('BENCHMARK')) {
           targetCategory = "LLM Applications";
        } else if (nameUpper.includes('MODEL-NEXUS') || nameUpper.includes('MODELNEXUS') || 
                   nameUpper.includes('DATA-HARVESTER') || nameUpper.includes('DATAHARVESTER') ||
                   nameUpper.includes('CONDUCTOR') || 
                   nameUpper.includes('DATABASE')) {
           targetCategory = "MLOps";
        } else if (nameUpper.includes('WINDOWS-ASSIST') || nameUpper.includes('VIEWPORT') || nameUpper.includes('AGENT-ORCHESTRATOR')) {
           targetCategory = "Multiplex Applications";
        } else if (nameUpper.includes('DEAD-INTERNET-THEORY')) {
           targetCategory = "Social Research";
        }
        
        nodes.push({
          id: repo.name,
          group: targetCategory === "LLM" || targetCategory === "LLM Applications" ? 2 : 
                 targetCategory === "STT" ? 3 : 
                 targetCategory === "MLOps" ? 5 : 4,
          radius: 12,
          description: repo.description || "No description provided.",
          url: repo.html_url,
          isRepo: true
        });
        
        links.push({
          source: targetCategory,
          target: repo.name,
          value: 1
        });
      });
      
      data = { nodes, links };
    } else {
      console.warn("GitHub API limit exceeded or failed. Falling back to local index.");
      const fallback = await fetch('graph_index.json');
      data = await fallback.json();
    }
    
    if (placeholder) placeholder.style.display = 'none';
    
    // Start drawing sequence
    await renderGraph(data);
    
    // Hide global loading screen
    const globalLoading = document.getElementById('global-loading');
    if (globalLoading) {
      globalLoading.classList.add('is-hidden');
    }
    
    window.addEventListener('resize', handleResize);
  } catch (error) {
    console.error('[AMEVA D3] Failed to load graph:', error);
    if (placeholder) {
      placeholder.innerHTML = `<span style="color:var(--danger)">Graph Loading Failed</span>`;
    }
    // Hide loading screen even on error
    const globalLoading = document.getElementById('global-loading');
    if (globalLoading) globalLoading.classList.add('is-hidden');
  }
}

/**
 * Render the force-directed graph with cinematic cascade effect
 */
async function renderGraph(data) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  d3.select('#graph-container').select('svg').remove();

  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;');

  const g = svg.append('g');

  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });
  
  svg.call(zoom);
  svg.on("dblclick.zoom", null);

  // Initialize simulation WITHOUT nodes so physics don't run yet
  simulation = d3.forceSimulation()
    .force('link', d3.forceLink(data.links).id(d => d.id).distance(120))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => d.radius + 15).iterations(2))
    .stop(); // PREVENT initial CPU spike

  link = g.append('g')
    .attr('stroke', 'var(--border-subtle)')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(data.links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.value))
    .attr('opacity', 0); // start invisible

  node = g.append('g')
    .attr('stroke', 'var(--bg-deep)')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(data.nodes)
    .join('circle')
    .attr('r', 0) // start radius 0
    .attr('fill', d => colorScale(d.group))
    .attr('cursor', d => d.url ? 'pointer' : 'grab');
    
  // Cascade Animation (Fly-in / Grow)
  // We return a Promise that resolves when the animation finishes
  return new Promise(resolve => {
    // 1. Links fade in slowly
    link.transition()
        .duration(800)
        .attr('opacity', 1);

    // 2. Nodes pop in one by one (cascade)
    const totalNodes = data.nodes.length;
    let finishedNodes = 0;

    node.transition()
        .duration(400)
        .delay((d, i) => i * 30) // cascade effect
        .attr('r', d => d.radius)
        .on('end', () => {
          finishedNodes++;
          if (finishedNodes === totalNodes) {
             // 3. Start simulation AFTER all nodes are drawn
             simulation.nodes(data.nodes);
             simulation.on('tick', tick);
             simulation.alpha(1).restart();
             
             // 4. Bind Interactions AFTER rendering
             bindNodeEvents();
             resolve();
          }
        });
  });
}

function tick() {
  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  node
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);
}

function bindNodeEvents() {
  node.call(drag(simulation));

  // UI Elements
  const tooltipSmall = document.getElementById('graph-tooltip-small');
  const tTitle = document.getElementById('tooltip-small-title');
  
  const modalNode = document.getElementById('modal-node-detail');
  const mTitle = document.getElementById('node-modal-title');
  const mDesc = document.getElementById('node-modal-desc');
  const mLink = document.getElementById('node-modal-link');
  const btnCloseModal = document.getElementById('btn-close-node-modal');

  // Close modal event
  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      modalNode.classList.remove('is-active');
    });
  }

  // Node Interactions
  node.on('mouseover', function(event, d) {
      d3.select(this)
        .transition().duration(200)
        .attr('r', d.radius * 1.3)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);
        
      link.transition().duration(200)
        .attr('stroke', l => l.source.id === d.id || l.target.id === d.id ? colorScale(d.group) : 'var(--border-subtle)')
        .attr('stroke-opacity', l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.2);
        
      // Show Small Tooltip tracking mouse
      if (tooltipSmall && tTitle) {
        tTitle.textContent = d.id;
        tooltipSmall.classList.add('is-visible');
        tooltipSmall.style.left = (event.pageX + 15) + 'px';
        tooltipSmall.style.top = (event.pageY + 15) + 'px';
      }
    })
    .on('mousemove', function(event) {
      if (tooltipSmall) {
        tooltipSmall.style.left = (event.pageX + 15) + 'px';
        tooltipSmall.style.top = (event.pageY + 15) + 'px';
      }
    })
    .on('mouseout', function(event, d) {
      d3.select(this)
        .transition().duration(200)
        .attr('r', d.radius)
        .attr('stroke', 'var(--bg-deep)')
        .attr('stroke-width', 1.5);
        
      link.transition().duration(200)
        .attr('stroke', 'var(--border-subtle)')
        .attr('stroke-opacity', 0.6);
        
      if (tooltipSmall) {
        tooltipSmall.classList.remove('is-visible');
      }
    })
    .on('click', function(event, d) {
      // Hide small tooltip
      if (tooltipSmall) tooltipSmall.classList.remove('is-visible');

      // Open Medium Modal
      if (modalNode && mTitle && mDesc) {
        mTitle.textContent = d.id;
        mDesc.textContent = d.description || 'No description provided.';
        
        if (d.url) {
          mLink.href = d.url;
          mLink.style.display = 'inline-flex';
        } else {
          mLink.style.display = 'none';
        }
        modalNode.classList.add('is-active'); // Re-using modal backdrop style
      }
    });

  // Draw Labels
  labels = g.append('g')
    .selectAll('text')
    .data(data.nodes)
    .join('text')
    .attr('dx', d => d.radius + 8)
    .attr('dy', 4)
    .text(d => d.id)
    .attr('font-family', 'var(--font-mono)')
    .attr('font-size', '12px')
    .attr('fill', 'var(--text-secondary)')
    .attr('pointer-events', 'none');

  // Tooltips (Simple title for now)
  node.append('title')
    .text(d => `${d.id}\n${d.description}`);

  // Simulation Tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
      
    labels
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });
  
  // Initial nice zoom out so it fits
  svg.call(zoom.transform, d3.zoomIdentity.translate(width/2, height/2).scale(0.8).translate(-width/2, -height/2));
}

/**
 * Handle Drag events
 */
function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }
  
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }
  
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
  
  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
}

/**
 * Resize handler to keep graph centered
 */
function handleResize() {
  if (!svg || !simulation) return;
  
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  svg
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);
    
  simulation.force('center', d3.forceCenter(width / 2, height / 2));
  simulation.alpha(0.3).restart();
}

// Auto-initialize when loaded as a module
document.addEventListener('DOMContentLoaded', () => {
  // Add a slight delay to ensure CSS variables and fonts are loaded
  setTimeout(initGraph, 100);
});
