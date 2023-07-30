import React, { useState } from 'react';
import axios from 'axios';

export default function Model() {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [processedImage, setProcessedImage] = useState(null);

  const handleGenerateImage = async () => {
    try {
      const response = await axios.post('/api/image_generation/process_image', {
        prompt: prompt,
        negativePrompt: negativePrompt,
      });

      if (response.data && response.data.image) {
        setProcessedImage(response.data.image);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
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
                        className=" w-full h-9 border-t-white border-b-white"
                        placeholder="Enter your prompt"
                        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </label>
                  </div>
                  <div
                    id="negative-prompt-text-input"
                    className="gr-block gr-box relative w-full overflow-hidden border-solid border border-l-white border-b-white !p-0 !m-0 !shadow-none !bg-transparent gr-padded"
                  >
                    <label className="block w-full">
                      <span className="text-gray-500 text-[0.855rem] mb-2 block relative z-40 sr-only h-0 !m-0">
                        Enter your negative prompt
                      </span>
                      <input
                        data-testid="textbox"
                        type="text"
                        className="scroll-hide block gr-box gr-input w-full gr-text-input h-9"
                        placeholder="Enter a negative prompt"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-0 mb-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                id="component-9"
        onClick={handleGenerateImage}
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
                  <div className="h-5 dark:text-white opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-image"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                </div>
                {processedImage && (
        <div>
          <img src={processedImage} alt="Processed" />
        </div>
      )}
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
