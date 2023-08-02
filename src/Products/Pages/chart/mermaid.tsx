import { Component, RefObject } from 'react';
import mermaid, { RenderResult } from 'mermaid';
import React from 'react';

interface MermaidProps {
  chart: string;
}

class Mermaid extends Component<MermaidProps> {
  private chartContainerRef: RefObject<HTMLDivElement>;

  constructor(props: MermaidProps) {
    super(props);
    this.chartContainerRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.renderMermaidChart();
  }

  componentDidUpdate(prevProps: MermaidProps) {
    if (prevProps.chart !== this.props.chart) {
      this.renderMermaidChart();
    }
  }

  renderMermaidChart = async () => {
    const { chart } = this.props;
    const container = this.chartContainerRef.current;
    if (container) {
      try {
        const renderResult: RenderResult = await mermaid.mermaidAPI.render('mermaid-svg', chart);
        const svgCode: string = renderResult.svg;
        container.innerHTML = svgCode;
      } catch (error) {
        console.error('Error rendering mermaid chart:', error);
      }
    }
  };

  render() {
    return <div ref={this.chartContainerRef} className="mermaid" />;
  }
}

export default Mermaid;
