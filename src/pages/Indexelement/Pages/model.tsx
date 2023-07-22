export default function Model() {
  return (
    <>
      <div id="component-2" className="svelte-10ogue4">
        <div
          id="component-3"
          className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 gr-padded"
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
                className="gr-form overflow-hidden flex border-solid border bg-gray-200 dark:bg-gray-700 gap-px rounded-lg flex-wrap"
                style={{ flexDirection: "inherit" }}
              >
                <div
                  id="prompt-text-input"
                  className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
                >
                  <label className="block w-full">
                    <span className="text-gray-500 text-[0.855rem] mb-2 block dark:text-gray-200 relative z-40 sr-only h-0 !m-0">
                      Enter your prompt
                    </span>
                    <input
                      data-testid="textbox"
                      type="text"
                      className="scroll-hide block gr-box gr-input w-full gr-text-input"
                      placeholder="Enter your prompt"
                    />
                  </label>
                </div>
                <div
                  id="negative-prompt-text-input"
                  className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
                >
                  <label className="block w-full">
                    <span className="text-gray-500 text-[0.855rem] mb-2 block dark:text-gray-200 relative z-40 sr-only h-0 !m-0">
                      Enter your negative prompt
                    </span>
                    <input
                      data-testid="textbox"
                      type="text"
                      className="scroll-hide block gr-box gr-input w-full gr-text-input"
                      placeholder="Enter a negative prompt"
                    />
                  </label>
                </div>
              </div>
            </div>
            <button
              className="gr-button gr-button-lg gr-button-secondary grow-0"
              id="component-9"
            >
              Generate image
            </button>
          </div>
        </div>
        <div
          id="gallery"
          className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200"
        >
          <div className="wrap svelte-1w9161c inset-0 opacity-0"></div>{" "}
          <div
            className="overflow-y-auto h-full p-2"
            style={{ position: "relative" }}
          >
            <div className="h-full min-h-[15rem] flex justify-center items-center">
              <div className="h-5 dark:text-white opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-image"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
            <iframe
              style={{
                display: "block",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%;",
                overflow: "hidden",
                border: "0",
                opacity: "0",
                pointerEvents: "none",
                zIndex: "-1",
              }}
              aria-hidden="true"
              src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"
            ></iframe>
          </div>
        </div>
        <div id="container-advanced-btns" className="svelte-10ogue4">
          <div id="share-btn-container" className="svelte-10ogue4">
            <div
              id="component-13"
              className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
            >
              <div className="wrap svelte-1w9161c inset-x-0 top-0 opacity-0"></div>{" "}
              <div className="transition">
                <div className="output-html" id="component-13">
                  <svg
                    id="share-btn-share-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M20.6081 3C21.7684 3 22.8053 3.49196 23.5284 4.38415C23.9756 4.93678 24.4428 5.82749 24.4808 7.16133C24.9674 7.01707 25.4353 6.93643 25.8725 6.93643C26.9833 6.93643 27.9865 7.37587 28.696 8.17411C29.6075 9.19872 30.0124 10.4579 29.8361 11.7177C29.7523 12.3177 29.5581 12.8555 29.2678 13.3534C29.8798 13.8646 30.3306 14.5763 30.5485 15.4322C30.719 16.1032 30.8939 17.5006 29.9808 18.9403C30.0389 19.0342 30.0934 19.1319 30.1442 19.2318C30.6932 20.3074 30.7283 21.5229 30.2439 22.6548C29.5093 24.3704 27.6841 25.7219 24.1397 27.1727C21.9347 28.0753 19.9174 28.6523 19.8994 28.6575C16.9842 29.4379 14.3477 29.8345 12.0653 29.8345C7.87017 29.8345 4.8668 28.508 3.13831 25.8921C0.356375 21.6797 0.754104 17.8269 4.35369 14.1131C6.34591 12.058 7.67023 9.02782 7.94613 8.36275C8.50224 6.39343 9.97271 4.20438 12.4172 4.20438H12.4179C12.6236 4.20438 12.8314 4.2214 13.0364 4.25468C14.107 4.42854 15.0428 5.06476 15.7115 6.02205C16.4331 5.09583 17.134 4.359 17.7682 3.94323C18.7242 3.31737 19.6794 3 20.6081 3ZM20.6081 5.95917C20.2427 5.95917 19.7963 6.1197 19.3039 6.44225C17.7754 7.44319 14.8258 12.6772 13.7458 14.7131C13.3839 15.3952 12.7655 15.6837 12.2086 15.6837C11.1036 15.6837 10.2408 14.5497 12.1076 13.1085C14.9146 10.9402 13.9299 7.39584 12.5898 7.1776C12.5311 7.16799 12.4731 7.16355 12.4172 7.16355C11.1989 7.16355 10.6615 9.33114 10.6615 9.33114C10.6615 9.33114 9.0863 13.4148 6.38031 16.206C3.67434 18.998 3.5346 21.2388 5.50675 24.2246C6.85185 26.2606 9.42666 26.8753 12.0653 26.8753C14.8021 26.8753 17.6077 26.2139 19.1799 25.793C19.2574 25.7723 28.8193 22.984 27.6081 20.6107C27.4046 20.212 27.0693 20.0522 26.6471 20.0522C24.9416 20.0522 21.8393 22.6726 20.5057 22.6726C20.2076 22.6726 19.9976 22.5416 19.9116 22.222C19.3433 20.1173 28.552 19.2325 27.7758 16.1839C27.639 15.6445 27.2677 15.4256 26.746 15.4263C24.4923 15.4263 19.4358 19.5181 18.3759 19.5181C18.2949 19.5181 18.2368 19.4937 18.2053 19.4419C17.6743 18.557 17.9653 17.9394 21.7082 15.6009C25.4511 13.2617 28.0783 11.8545 26.5841 10.1752C26.4121 9.98141 26.1684 9.8956 25.8725 9.8956C23.6001 9.89634 18.2311 14.9403 18.2311 14.9403C18.2311 14.9403 16.7821 16.496 15.9057 16.496C15.7043 16.496 15.533 16.4139 15.4169 16.2112C14.7956 15.1296 21.1879 10.1286 21.5484 8.06535C21.7928 6.66715 21.3771 5.95917 20.6081 5.95917Z"
                      fill="#FF9D00"
                    ></path>
                    <path
                      d="M5.50686 24.2246C3.53472 21.2387 3.67446 18.9979 6.38043 16.206C9.08641 13.4147 10.6615 9.33111 10.6615 9.33111C10.6615 9.33111 11.2499 6.95933 12.59 7.17757C13.93 7.39581 14.9139 10.9401 12.1069 13.1084C9.29997 15.276 12.6659 16.7489 13.7459 14.713C14.8258 12.6772 17.7747 7.44316 19.304 6.44221C20.8326 5.44128 21.9089 6.00204 21.5484 8.06532C21.188 10.1286 14.795 15.1295 15.4171 16.2118C16.0391 17.2934 18.2312 14.9402 18.2312 14.9402C18.2312 14.9402 25.0907 8.49588 26.5842 10.1752C28.0776 11.8545 25.4512 13.2616 21.7082 15.6008C17.9646 17.9393 17.6744 18.557 18.2054 19.4418C18.7372 20.3266 26.9998 13.1351 27.7759 16.1838C28.5513 19.2324 19.3434 20.1173 19.9117 22.2219C20.48 24.3274 26.3979 18.2382 27.6082 20.6107C28.8193 22.9839 19.2574 25.7722 19.18 25.7929C16.0914 26.62 8.24723 28.3726 5.50686 24.2246Z"
                      fill="#FFD21E"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              id="component-14"
              className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
            >
              <div className="wrap svelte-1w9161c inset-x-0 top-0 opacity-0"></div>{" "}
              <div className="transition">
                <div className="output-html" id="component-14">
                  <svg
                    id="share-btn-loading-icon"
                    style={{ display: "none" }}
                    className="animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <circle></circle>
                    <path></path>
                  </svg>
                </div>
              </div>
            </div>
            <button
              className="gr-button gr-button-lg gr-button-secondary"
              id="share-btn"
            >
              Share to community
            </button>
          </div>
        </div>
        <div
          id="component-16"
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col gap-3 hover:border-gray-300 dark:hover:border-gray-600 transition"
        >
          <div className="w-full flex justify-between cursor-pointer">
            <span>Advanced settings</span>{" "}
            <span className="transition rotate-90">▼</span>
          </div>{" "}
          <div
            id=""
            className="overflow-hidden flex flex-col relative col gap-4 !hidden"
            style={{ minWidth: "min(0px, 100%)", flexGrow: "1" }}
          >
            <div
              className="gr-form overflow-hidden flex border-solid border bg-gray-200 dark:bg-gray-700 gap-px rounded-lg flex-wrap"
              style={{ flexDirection: "inherit" }}
            >
              <div
                id="component-17"
                className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 gr-padded"
              >
                <div className="wrap svelte-1w9161c inset-0 opacity-0"></div>{" "}
                <div className="w-full flex flex-col ">
                  <div className="flex justify-between">
                    <label htmlFor="range_id_0">
                      <span className="text-gray-500 text-[0.855rem] mb-2 block dark:text-gray-200 relative z-40">
                        Guidance Scale
                      </span>
                    </label>
                    <input
                      type="number"
                      className="gr-box gr-input gr-text-input text-center h-6"
                      min="0"
                      max="50"
                      step="0.1"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  id="range_id_0"
                  name="cowbell"
                  className="w-full disabled:cursor-not-allowed"
                  min="0"
                  max="50"
                  step="0.1"
                />
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
                A small cabin on top of a snowy mountain in the style of Disney,
                artstation
              </div>{" "}
            </button>
          </div>
        </div>{" "}
        <div
          id="component-20"
          className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
        >
          <div className="wrap svelte-1w9161c inset-x-0 top-0 opacity-0"></div>{" "}
          <div className="transition">
            <div className="output-html" id="component-20">
              <div className="footer">
                <p>
                  Model by{" "}
                  <a
                    href="https://huggingface.co/stabilityai"
                    style={{ textDecoration: "underline" }}
                  >
                    StabilityAI
                  </a>{" "}
                  - backend running JAX on TPUs due to generous support of{" "}
                  <a
                    href="https://sites.research.google/trc/about/"
                    style={{ textDecoration: "underline" }}
                  >
                    Google TRC program
                  </a>{" "}
                  - Gradio Demo by 🤗 Hugging Face
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="component-21"
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col gap-3 hover:border-gray-300 dark:hover:border-gray-600 transition"
        >
          <div className="w-full flex justify-between cursor-pointer">
            <span>License</span> <span className="transition rotate-90">▼</span>
          </div>{" "}
          <div
            id=""
            className="overflow-hidden flex flex-col relative col gap-4 !hidden"
            style={{ minWidth: "min(0px, 100%)", flexGrow: "1" }}
          >
            <div
              id="component-22"
              className="gr-block gr-box relative w-full overflow-hidden border-solid border border-gray-200 !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
            >
              <div className="wrap svelte-1w9161c inset-x-0 top-0 opacity-0"></div>{" "}
              <div className="transition">
                <div className="output-html" id="component-22">
                  <div className="acknowledgments">
                    <p></p>
                    <h4>LICENSE</h4>
                    The model is licensed with a{" "}
                    <a
                      href="https://huggingface.co/stabilityai/stable-diffusion-2/blob/main/LICENSE-MODEL"
                      style={{ textDecoration: "underline" }}
                    >
                      CreativeML OpenRAIL++
                    </a>{" "}
                    license. The authors claim no rights on the outputs you
                    generate, you are free to use them and are accountable for
                    their use which must not go against the provisions set in
                    this license. The license forbids you from sharing any
                    content that violates any laws, produce any harm to a
                    person, disseminate any personal information that would be
                    meant for harm, spread misinformation and target vulnerable
                    groups. For the full list of restrictions please{" "}
                    <a
                      href="https://huggingface.co/spaces/CompVis/stable-diffusion-license"
                      target="_blank"
                      style={{ textDecoration: "underline" }}
                    >
                      read the license
                    </a>
                    <p></p>
                    <p></p>
                    <h4>Biases and content acknowledgment</h4>
                    Despite how impressive being able to turn text into image
                    is, beware to the fact that this model may output content
                    that reinforces or exacerbates societal biases, as well as
                    realistic faces, pornography and violence. The model was
                    trained on the{" "}
                    <a
                      href="https://laion.ai/blog/laion-5b/"
                      style={{ textDecoration: "underline" }}
                    >
                      LAION-5B dataset
                    </a>
                    , which scraped non-curated image-text-pairs from the
                    internet (the exception being the removal of illegal
                    content) and is meant for research purposes. You can read
                    more in the{" "}
                    <a
                      href="https://huggingface.co/CompVis/stable-diffusion-v1-4"
                      style={{ textDecoration: "underline" }}
                    >
                      model card
                    </a>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
