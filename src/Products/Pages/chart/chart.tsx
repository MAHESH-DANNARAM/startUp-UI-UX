import React, { useState, useEffect } from 'react';
import Mermaid from './mermaid';

interface AppProps {}

const Chart: React.FC<AppProps> = () => {
  const [chartDefinition, setChartDefinition] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    generateDiagram();
  }, []);

  const generateDiagram = () => {
    const url = "http://127.0.0.1:5000/generate_pie_chart";
    const headers = { 'Content-Type': 'application/json' };
    const instruction = 'Generate Mermaid Markdown text for Pie chart Title: Pets Adopted by Volunteers "Dogs": 386 "Cats": 85 "Rats": 15';
    const data = { instruction };

  

    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setChartDefinition(data.result);
      setError('');
    })
    .catch(error => {
      setChartDefinition('');
      setError(error.message || 'Something went wrong.');
    });
  };

  const handleChartChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChartDefinition(event.target.value);
  };

  return (
    <div>
      <h1>My Mermaid Diagram</h1>
      {chartDefinition ? (
        <>
          <div style={{ marginBottom: '16px' }}>
            <textarea
              rows={10}
              cols={80}
              value={chartDefinition}
              onChange={handleChartChange}
            />
          </div>
          <Mermaid chart={chartDefinition} />
        </>
      ) : (
        <div>
          <p>Generating the diagram...</p>
          {error && <div>Error: {error}</div>}
        </div>
      )}
    </div>
  );
};

export default Chart;
