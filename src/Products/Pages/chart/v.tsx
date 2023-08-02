import { useState } from "react";
import Mermaid from "./mermaid";

// Define the valid chart types
const validChartTypes: string[] = [
  "Sequence chart",
  "Class chart",
  "State chart",
  "Gantt chart",
  "Er chart",
  "Flow chart",
  "Pie chart",
];

// Interface for the data response from the server
interface ChartDataResponse {
  result: string;
}

export default function Chart_model() {
  const [chartDefinition, setChartDefinition] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [selectedChartType, setSelectedChartType] = useState<string>("");

  // Function to generate the chart based on user's choice
  const generateDiagram = () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt before generating the chart.");
      return;
    }

    if (!validChartTypes.includes(selectedChartType)) {
      setError(
        "Invalid chart type. Please choose one of the valid chart types."
      );
      return;
    }

    const url = "http://127.0.0.1:5000/generate_chart";
    const headers = { "Content-Type": "application/json" };
    const instruction = `Generate Mermaid Markdown text for ${selectedChartType} ${prompt}`;
    console.log(instruction)
    const data = { instruction };

    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json() as Promise<ChartDataResponse>;
      })
      .then((data) => {
        setChartDefinition(data.result);
        setError("");
      })
      .catch((error) => {
        setChartDefinition("");
        setError(error.message || "Something went wrong.");
      });
  };

  // Event handler for the dropdown menu to select the chart type
  const handleChartTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setError(""); // Clear the error message
    setSelectedChartType(event.target.value);
  };

  // Event handler for the "Generate image" button click
  const handleGenerateButtonClick = () => {
    setError(""); // Clear the error message
    generateDiagram();
  };

  return (
    <>
      <div id="component-2" className="svelte-10ogue4 pl-96 pr-12 ">
        <div
          id="component-3"
          className="gr-block gr-box relative w-full overflow-hidden border-solid border rounded-lg gr-padded"
        >
          <div
            id="component-3"
            className="gr-block gr-box relative w-full overflow-hidden border rounded-lg gr-padded"
          >
            <div
              className="flex row w-full flex-wrap gap-4 gr-compact items-stretch"
              id="prompt-container"
            >
              <div
                id="component-5"
                className="overflow-hidden flex flex-col relative col gap-4 gr-compact"
                style={{ minWidth: "min(320px, 100%)", flexGrow: "1" }}
              >
                <div
                  className="gr-form overflow-hidden flex border-solid border border-t-white border-l-white  gap-px  flex-wrap"
                  style={{ flexDirection: "inherit" }}
                >
                  <div
                    id="prompt-text-input"
                    className="gr-block gr-box relative w-full border-solid !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
                  >
                    <label className="block w-full">
                      <span className="text-gray-500 text-[0.855rem] mb-2 block relative z-40 sr-only h-0 !m-0">
                        Enter your prompt
                      </span>
                      <input
                        data-testid="textbox"
                        type="text"
                        className="w-full h-9 border-t-white border-b-white border-l-0 border-r-0 focus:border-blue-300 focus:outline-none"
                        placeholder="Enter your prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </label>
                  </div>
                  <div
                    id="chart-type-select"
                    className="gr-block gr-box relative w-full overflow-hidden border-solid border border-l-white border-b-white !p-0 !m-0 !shadow-none !bg-transparent gr-padded"
                  >
                    <label className="block w-full">
                      {/* Dropdown menu to select the chart type */}
                      <select
                        id="chartTypeSelect"
                        onChange={handleChartTypeChange}
                        value={selectedChartType}
                      >
                        <option value="" disabled>
                          Select Chart Type
                        </option>
                        {validChartTypes.map((chartType) => (
                          <option key={chartType} value={chartType}>
                            {chartType}
                          </option>
                        ))}
                      </select>
                      <div>
                        {/* Display the generated chart or error message */}
                        {chartDefinition ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: chartDefinition,
                            }}
                          />
                        ) : (
                          <div>{error}</div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-0 mb-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                id="component-9"
                onClick={handleGenerateButtonClick}
              >
                Generate image
              </button>
            </div>
          </div>
          <div className="">
            <div
              id="gallery"
              className="gr-block gr-box relative w-full overflow-hidden border-solid border"
            >
              <div className="wrap svelte-1w9161c inset-0 opacity-0"></div>{" "}
              <div
                className="overflow-y-auto h-full p-2"
                style={{ position: "relative" }}
              >
                <div className="h-full min-h-[28rem] flex justify-center items-center">
                  <div className="w-[100%]">
                    <h1>My Mermaid Diagram</h1>
                    {chartDefinition ? (
                      <>
                        <div style={{ marginBottom: "16px" }}>
                          <textarea
                            rows={10}
                            cols={80}
                            value={chartDefinition}
                            readOnly // Make the textarea read-only
                          />
                        </div>
                        <Mermaid chart={chartDefinition} />
                      </>
                    ) : (
                      <div>
                        {error && <div>Error: {error}</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="component-19"
            className="mt-4 inline-block max-w-full text-gray-700 w-full"
          >
            <div className="text-xs mb-2 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="mr-1"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"
                ></path>
              </svg>{" "}
              Examples
            </div>{" "}
            <div className="gr-samples-gallery">
              <button className="group rounded-lg">
                <div className="gr-sample-textbox">
                  A high tech solarpunk utopia in the Amazon rainforest
                </div>{" "}
              </button>
              <button className="group rounded-lg">
                <div className="gr-sample-textbox">
                  A pikachu fine dining with a view to the Eiffel Tower
                </div>{" "}
              </button>
              <button className="group rounded-lg">
                <div className="gr-sample-textbox">
                  A mecha robot in a favela in expressionist style
                </div>{" "}
              </button>
              <button className="group rounded-lg">
                <div className="gr-sample-textbox">
                  an insect robot preparing a delicious meal
                </div>{" "}
              </button>
              <button className="group rounded-lg">
                <div className="gr-sample-textbox">
                  A small cabin on top of a snowy mountain in the style of
                  Disney, artstation
                </div>{" "}
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}