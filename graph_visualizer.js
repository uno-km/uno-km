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
    const response = await fetch('graph_index.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    // Hide placeholder
    if (placeholder) placeholder.style.display = 'none';
    
    renderGraph(data);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
  } catch (error) {
    console.error('[AMEVA D3] Failed to load graph_index.json:', error);
    if (placeholder) {
      placeholder.innerHTML = `<span style="color:var(--danger)">Graph Loading Failed</span>`;
    }
  }
}

/**
 * Render the force-directed graph
 */
function renderGraph(data) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Clear existing SVG if any
  d3.select('#graph-container').select('svg').remove();

  // Create SVG with Zoom support
  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;');

  const g = svg.append('g');

  // Zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });
  
  svg.call(zoom);
  // Optional: Double click to reset zoom instead of zoom in
  svg.on("dblclick.zoom", null);

  // Setup Simulation
  simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(data.links).id(d => d.id).distance(120))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => d.radius + 15).iterations(2));

  // Draw Links (Edges)
  link = g.append('g')
    .attr('stroke', 'var(--border-subtle)')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(data.links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.value));

  // Draw Nodes (Vertices)
  node = g.append('g')
    .attr('stroke', 'var(--bg-deep)')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(data.nodes)
    .join('circle')
    .attr('r', d => d.radius)
    .attr('fill', d => colorScale(d.group))
    .call(drag(simulation));
    
  // Add Node Glow/Hover effects
  node.on('mouseover', function(event, d) {
      d3.select(this)
        .transition().duration(200)
        .attr('r', d.radius * 1.3)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);
        
      // Highlight connected links
      link.transition().duration(200)
        .attr('stroke', l => l.source.id === d.id || l.target.id === d.id ? colorScale(d.group) : 'var(--border-subtle)')
        .attr('stroke-opacity', l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.2);
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
