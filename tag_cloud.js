/**
 * AMEVA Neural Fabric - Tag Cloud & Topic Filter
 */
class TagCloud {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'tag-cloud-container';
    this.activeTag = null;
    this.initUI();
  }

  initUI() {
    this.container.style.position = 'fixed';
    this.container.style.left = '24px';
    this.container.style.bottom = '24px';
    this.container.style.zIndex = '150'; // Below FABs but above graph
    this.container.style.display = 'flex';
    this.container.style.flexWrap = 'wrap';
    this.container.style.gap = '8px';
    this.container.style.maxWidth = '300px';
    
    document.body.appendChild(this.container);
  }

  buildFromGraph(graphData) {
    if (!graphData || !graphData.nodes) return;
    
    const topicCounts = {};
    graphData.nodes.forEach(node => {
      if (node.matchTopics) {
        node.matchTopics.forEach(topic => {
          topicCounts[topic] = (topicCounts[topic] || 0) + 1;
        });
      }
    });

    // Sort by frequency
    const sortedTopics = Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15); // Top 15 tags

    this.container.innerHTML = '';
    
    const title = document.createElement('div');
    title.textContent = 'NEURAL TOPICS';
    title.style.width = '100%';
    title.style.fontSize = '0.7rem';
    title.style.color = 'var(--text-secondary)';
    title.style.fontFamily = 'var(--font-mono)';
    title.style.marginBottom = '4px';
    this.container.appendChild(title);

    sortedTopics.forEach(([topic, count]) => {
      const tag = document.createElement('div');
      tag.className = 'topic-tag';
      tag.textContent = `#${topic} (${count})`;
      
      // Base styles (will move to CSS later if needed, inline for now for rapid prototyping)
      tag.style.background = 'rgba(0, 239, 255, 0.1)';
      tag.style.border = '1px solid rgba(0, 239, 255, 0.3)';
      tag.style.color = 'var(--accent-cyan)';
      tag.style.padding = '4px 8px';
      tag.style.borderRadius = '4px';
      tag.style.fontSize = '0.75rem';
      tag.style.cursor = 'pointer';
      tag.style.transition = 'all 0.2s';
      tag.style.backdropFilter = 'blur(4px)';

      tag.onmouseenter = () => {
        tag.style.background = 'rgba(0, 239, 255, 0.3)';
        if(window.audioEngine) window.audioEngine.playTick();
      };
      tag.onmouseleave = () => {
        if (this.activeTag !== topic) {
          tag.style.background = 'rgba(0, 239, 255, 0.1)';
        }
      };

      tag.onclick = () => {
        if (this.activeTag === topic) {
          this.activeTag = null;
          tag.style.background = 'rgba(0, 239, 255, 0.1)';
          if(window.resetGraphFilter) window.resetGraphFilter();
        } else {
          // Reset all
          Array.from(this.container.children).forEach(c => {
            if (c.className === 'topic-tag') c.style.background = 'rgba(0, 239, 255, 0.1)';
          });
          this.activeTag = topic;
          tag.style.background = 'rgba(124, 58, 237, 0.5)';
          tag.style.borderColor = 'rgba(124, 58, 237, 0.8)';
          tag.style.color = '#fff';
          if(window.filterGraphByTopic) window.filterGraphByTopic(topic);
          if(window.audioEngine) window.audioEngine.playDeepBass();
        }
      };

      this.container.appendChild(tag);
    });
  }
}

// Global hooks for Graph Visualizer
window.resetGraphFilter = function() {
  if (window.nodeElements) {
    window.nodeElements.style("opacity", 1);
    window.linkElements.style("opacity", 0.6);
  }
};

window.filterGraphByTopic = function(topic) {
  if (window.nodeElements) {
    window.nodeElements.style("opacity", d => {
      if (d.matchTopics && d.matchTopics.includes(topic)) return 1;
      return 0.1;
    });
    window.linkElements.style("opacity", 0.1);
  }
};

window.tagCloud = new TagCloud();
