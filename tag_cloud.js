/**
 * AMEVA Neural Fabric - Tag Cloud & Topic Filter
 */
class TagCloud {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'tag-cloud-container';
    this.activeTag = null;
    this.isCollapsed = window.innerWidth <= 768; // Collapse by default on mobile
    this.lastGraphData = null;
    this.wobbleInterval = null;
    this.expandTimeout = null;
    this.initUI();
    this.startWobbleTimer();
  }

  initUI() {
    this.container.style.position = 'fixed';
    this.container.style.left = '11px';
    this.container.style.bottom = '11px';
    this.container.style.zIndex = '210'; // Below FABs but above graph
    this.container.style.display = 'flex';
    this.container.style.flexWrap = 'wrap';
    this.container.style.gap = '8px';
    this.container.style.transition = 'all 0.3s ease';
    this.container.style.overflow = 'hidden';

    document.body.appendChild(this.container);
  }

  startWobbleTimer() {
    if (this.wobbleInterval) clearInterval(this.wobbleInterval);
    this.wobbleInterval = setInterval(() => {
      if (this.isCollapsed && this.container) {
        this.container.classList.add('wobble-active');
        setTimeout(() => {
          this.container.classList.remove('wobble-active');
        }, 600);
      }
    }, 3000);
  }

  buildFromGraph(graphData) {
    if (!graphData || !graphData.nodes) return;
    this.lastGraphData = graphData;

    const topicCounts = {};
    graphData.nodes.forEach(node => {
      if (node.matchTopics) {
        node.matchTopics.forEach(topic => {
          topicCounts[topic] = (topicCounts[topic] || 0) + 1;
        });
      }
    });

    const sortedTopics = Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);

    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = null;
    }

    // Apply container styling based on collapse state
    if (this.isCollapsed) {
      this.container.style.background = 'rgba(15, 23, 42, 0.8)';
      this.container.style.border = '1px dashed var(--accent-cyan)';
      this.container.style.borderRadius = 'var(--radius-sm)';
      this.container.style.padding = '8px 12px';
      this.container.style.width = '90px';
      this.container.style.maxWidth = '180px';
      this.container.style.boxShadow = '0 4px 15px rgba(0, 239, 255, 0.1)';
      this.container.style.backdropFilter = 'blur(8px)';

      this.renderCollapsedHeader();
    } else {
      this.container.style.background = 'rgba(28, 28, 28, 0.4)';
      this.container.style.border = '1px solid var(--border-subtle)';
      this.container.style.borderRadius = 'var(--radius-md)';
      this.container.style.padding = '12px';
      this.container.style.width = '300px';
      this.container.style.maxWidth = '300px';
      this.container.style.boxShadow = 'none';
      this.container.style.backdropFilter = 'blur(4px)';

      this.renderExpandedSkeleton();

      this.expandTimeout = setTimeout(() => {
        this.renderExpandedTags(sortedTopics);
      }, 300); // Wait for transition width to expand first
    }
  }

  renderCollapsedHeader() {
    this.container.innerHTML = '';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '100%';
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';

    const title = document.createElement('span');
    title.textContent = 'TOPICS';
    title.style.fontSize = '0.75rem';
    title.style.color = 'var(--accent-cyan)';
    title.style.fontFamily = 'var(--font-mono)';
    title.style.fontWeight = 'bold';
    header.appendChild(title);

    const toggle = document.createElement('span');
    toggle.textContent = '[+]';
    toggle.style.fontSize = '0.7rem';
    toggle.style.color = 'var(--text-secondary)';
    toggle.style.fontFamily = 'var(--font-mono)';
    header.appendChild(toggle);

    header.onclick = (e) => {
      e.stopPropagation();
      this.isCollapsed = false;
      this.buildFromGraph(this.lastGraphData);
      if (window.audioEngine) window.audioEngine.playTick();
    };

    this.container.appendChild(header);
  }

  renderExpandedSkeleton() {
    this.container.innerHTML = '';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '100%';
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';

    const title = document.createElement('span');
    title.textContent = 'TOPICS';
    title.style.fontSize = '0.75rem';
    title.style.color = 'var(--accent-cyan)';
    title.style.fontFamily = 'var(--font-mono)';
    title.style.fontWeight = 'bold';
    header.appendChild(title);

    const toggle = document.createElement('span');
    toggle.textContent = '[-]';
    toggle.style.fontSize = '0.7rem';
    toggle.style.color = 'var(--text-secondary)';
    toggle.style.fontFamily = 'var(--font-mono)';
    header.appendChild(toggle);

    header.onclick = (e) => {
      e.stopPropagation();
      this.isCollapsed = true;
      this.buildFromGraph(this.lastGraphData);
      if (window.audioEngine) window.audioEngine.playTick();
    };

    this.container.appendChild(header);
  }

  renderExpandedTags(sortedTopics) {
    if (this.isCollapsed) return;

    // Divider line
    const hr = document.createElement('div');
    hr.style.width = '100%';
    hr.style.height = '1px';
    hr.style.background = 'var(--border-subtle)';
    hr.style.margin = '4px 0 8px 0';
    this.container.appendChild(hr);

    sortedTopics.forEach(([topic, count]) => {
      const tag = document.createElement('div');
      tag.className = 'topic-tag';
      tag.textContent = `#${topic} (${count})`;

      // Base styles
      tag.style.background = 'rgba(0, 239, 255, 0.1)';
      tag.style.border = '1px solid rgba(0, 239, 255, 0.3)';
      tag.style.color = 'var(--accent-cyan)';
      tag.style.padding = '4px 8px';
      tag.style.borderRadius = '4px';
      tag.style.fontSize = '0.75rem';
      tag.style.cursor = 'pointer';
      tag.style.transition = 'all 0.2s';

      // Fade-in animation style
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(5px)';
      tag.style.animation = 'tagFadeIn 0.3s ease forwards';

      tag.onmouseenter = () => {
        tag.style.background = 'rgba(0, 239, 255, 0.3)';
        if (window.audioEngine) window.audioEngine.playTick();
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
          if (window.resetGraphFilter) window.resetGraphFilter();
        } else {
          Array.from(this.container.querySelectorAll('.topic-tag')).forEach(c => {
            c.style.background = 'rgba(0, 239, 255, 0.1)';
            c.style.borderColor = 'rgba(0, 239, 255, 0.3)';
            c.style.color = 'var(--accent-cyan)';
          });
          this.activeTag = topic;
          tag.style.background = 'rgba(124, 58, 237, 0.5)';
          tag.style.borderColor = 'rgba(124, 58, 237, 0.8)';
          tag.style.color = '#fff';
          if (window.filterGraphByTopic) window.filterGraphByTopic(topic);
          if (window.audioEngine) window.audioEngine.playDeepBass();
        }
      };

      this.container.appendChild(tag);
    });
  }
}

// Global hooks for Graph Visualizer
window.resetGraphFilter = function () {
  if (window.nodeElements) {
    window.nodeElements.style("opacity", 1);
    window.linkElements.style("opacity", 0.6);
  }
};

window.filterGraphByTopic = function (topic) {
  if (window.nodeElements) {
    window.nodeElements.style("opacity", d => {
      if (d.matchTopics && d.matchTopics.includes(topic)) return 1;
      return 0.1;
    });
    window.linkElements.style("opacity", 0.1);
  }
};

window.tagCloud = new TagCloud();
