import React, { useRef, useEffect } from "react";

export default function Text_to_Voice() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-white bg-crosses min-h-full flex-1">
        <div className="py-2u 2xl:pb-6u 2xl:pt-3u max-w-screen-2xl w-full">
          <div className="-mb-2u">
            <section className="content relative max-w-screen-2xl bg-bottom bg-no-repeat">
              <div className="relative w-full flex flex-col xl:flex-row text-left gap-1u xl:gap-2u">
                <div className="xl:w-1/3 flex-shrink-0">
                  <h1 className="font-sans block font-bold text-black text-sm flex-shrink-0 tracking-tight text-start">
                    Generative Voice AI
                  </h1>
                  <span className="font-serif text-xl block font-normal text-gray-700 max-w-xl mt-5 xl:mb-12 text-start">
                    Explore the most advanced text to speech and voice cloning
                    software ever. Create lifelike voiceovers for your content
                    or use our AI voice generator as an easy-to-use text reader.
                  </span>
                </div>
                <div className="w-full -mb-1u xl:-mb-2u">
                  <div className="flex flex-col items-stretch max-w-4xl">
                    <span className="font-serif text-sm block font-light text-gray-500 ml-4 mb-2 flex-wrap items-center -m-1">
                      <div className="m-1">
                        Click on a language to generate in a random text:
                      </div>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-en">
                            English
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-de">
                            German
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-pl">
                            Polish
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-es">
                            Spanish
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-it">
                            Italian
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-fr">
                            French
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-pt">
                            Portuguese
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                        <span className="font-serif text-xs block font-normal text-gray-700">
                          <span data-testid="tryout-lang-button-hi">Hindi</span>
                        </span>
                      </span>
                    </span>
                    <div className="bg-white shadow-2xl rounded-md flex flex-col items-stretch relative">
                      <div className="relative px-8 py-8 pb-11">
                        <textarea
                          // autoFocus=""
                          data-testid="tryout-textarea"
                          className="font-serif text-lg bg-transparent p-0 resize-none w-full outline-none focus:ring-0 ring-0 border-none placeholder:text-gray-200"
                          placeholder="Eleven lets you voice any length of text in top quality, all while automatically matching what is being said with how it’s being said. The model works best on longer texts, so type in at least a few sentences."
                          // rows="5"
                          // maxLength="333"
                          // spellcheck="false"
                        ></textarea>
                        <div className="absolute bottom-4 left-7">
                          <button
                            className="relative cursor-pointer rounded-lg mb-2 text-left focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm text-gray-700 text-base flex items-center"
                            id="headlessui-listbox-button-P0-2"
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="inline h-5 w-5 text-gray-200"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            premade/Adam
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-400"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <span className="font-serif text-xs block font-normal text-gray-700 absolute right-8 bottom-6">
                          0 / 333
                        </span>
                      </div>
                      <div className="px-8 py-8 items-center border-t-2 border-gray-100/50">
                        <div className="flex flex-row items-center w-full gap-3">
                          <audio
                            id="audio-player"
                            //   autoPlay="true"
                          ></audio>
                          <button
                            type="button"
                            className="btn btn-circle btn-primary btn-xl"
                            //   disabled=""
                            aria-label="Play"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 36 36"
                              className="fill-white group-active:fill-white/80 h-4 w-4"
                            >
                              <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                            </svg>
                          </button>
                          <div
                            className="w-full flex items-center slider-wrapper-lg disabled"
                            style={{ position: "relative" }}
                          >
                            <div
                              className="slider-track-lg slider-track slider-track-lg rounded slider-track-0"
                              style={{
                                position: "absolute",
                                left: "0px",
                                right: "497px",
                              }}
                            ></div>
                            <div
                              className="slider-track-lg slider-track slider-track-lg rounded slider-track-1"
                              style={{
                                position: "absolute",
                                left: "0px",
                                right: "0px",
                              }}
                            ></div>
                            {/* <div className="thumb thumb-0 " 
                                //  tabIndex="0"
                                  role="slider" aria-orientation="horizontal" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ></div> */}
                            <div className="relative flex items-center text-gray-500 cursor-pointer">
                              <div className="relative pb-1">
                                <div className="relative">
                                  <div className="absolute -translate-y-1/2 -translate-x-1/2">
                                    <div className="slider-thumb h-4 rounded-full w-1 bg-black"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 flex-shrink-0 text-gray-400 hover:text-black cursor-pointer"
                        >
                          <title>Say it differently</title>
                          <path
                            fill-rule="evenodd"
                            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5 flex-shrink-0 text-gray-400 opacity-75"
                        >
                          <title>Download audio</title>
                          <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                          <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* </section> */}
          <section className="content bg-black text-white py-1.5u mr-0 xl:mt-0 mt-12">
            <div className="content pl-0 flex flex-col md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-4">
              <button
                className="flex items-center btn btn-white btn-xl btn-normal bg-accent-default text-black hover:bg-accent-dark"
                type="button"
              >
                Get Started Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </section>
          <div className="pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-52 content">
            <div className="mx-auto max-w-7xl ">
              <div className="sm:text-left mb-12 md:mb-16 lg:mb-20">
                <h2 className="font-sans text-5xl block font-bold text-black mb-6">
                  Expand your reach with our AI voice generator
                </h2>
                <span className="font-serif text-xl block font-normal text-gray-700">
                  Let your content go beyond text with our advanced Text to
                  Speech tool. Generate high-quality spoken audio in any voice,
                  style, and language. Our text reader is powered by an AI model
                  that renders human intonation and inflections with unrivaled
                  fidelity, adjusting the delivery based on context.
                </span>
              </div>
              <div className="max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="sm:min-w-0 sm:flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="font-sans text-2xl block font-bold text-black mb-4">
                          Videos
                        </h5>
                        <span className="font-serif text-base block font-normal text-gray-500 w-full">
                          Whether you're a content creator or a short story
                          writer, our AI voice generator lets you design
                          captivating audio experiences.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-black w-16 h-16 pb-1 hover:text-gray-700 cursor-pointer"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex flex-col space-y-2">
                          <span className="font-serif text-sm block font-normal text-gray-700 leading-none">
                            Bring fictional characters to life
                          </span>
                          <span className="font-serif text-base block font-semibold text-gray-900 leading-none">
                            Stories with emotions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="sm:min-w-0 sm:flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="font-sans text-2xl block font-bold text-black mb-4">
                          Games
                        </h5>
                        <span className="font-serif text-base block font-normal text-gray-500 w-full">
                          Immerse your players in rich, dynamic worlds with our
                          AI voice generator. From captivating NPC dialogue to
                          real-time narration, our tool brings your game’s audio
                          to the next level.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-black w-16 h-16 pb-1 hover:text-gray-700 cursor-pointer"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex flex-col space-y-2">
                          <span className="font-serif text-sm block font-normal text-gray-700 leading-none">
                            Experience the impact of AI-generated voices in
                            gaming
                          </span>
                          <span className="font-serif text-base block font-semibold text-gray-900 leading-none">
                            Immersive gaming
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="sm:min-w-0 sm:flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="font-sans text-2xl block font-bold text-black mb-4">
                          Audiobooks
                        </h5>
                        <span className="font-serif text-base block font-normal text-gray-500 w-full">
                          Bring stories to life by converting long-form content
                          to engaging audio. Our AI voice generator lets you
                          create audiobooks with a natural voice and tone,
                          making it the perfect tool for authors and publishers.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-black w-16 h-16 pb-1 hover:text-gray-700 cursor-pointer"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex flex-col space-y-2">
                          <span className="font-serif text-sm block font-normal text-gray-700 leading-none">
                            AI-voiced example of an audiobook
                          </span>
                          <span className="font-serif text-base block font-semibold text-gray-900 leading-none">
                            Every book deserves to be heard
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="sm:min-w-0 sm:flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="font-sans text-2xl block font-bold text-black mb-4">
                          Chatbots
                        </h5>
                        <span className="font-serif text-base block font-normal text-gray-500 w-full">
                          Create a more natural and engaging experience for your
                          users with our text to speech tool. Our AI voice
                          generator is designed to meet long-form content
                          demands.
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-black w-16 h-16 pb-1 hover:text-gray-700 cursor-pointer"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div className="flex flex-col space-y-2">
                          <span className="font-serif text-sm block font-normal text-gray-700 leading-none">
                            Experience interactions with an AI-generated voice
                          </span>
                          <span className="font-serif text-base block font-semibold text-gray-900 leading-none">
                            AI assistants with personality
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-8 sm:pb-6 lg:pb-12">
            <section className="py-32 max-w-screen-2xl flex flex-col align-stretch items-stretch">
              <div className="flex flex-col align-stretch items-stretch">
                <div className="sm:text-left content max-w-7xl mb-12 md:mb-16 lg:mb-20">
                  <h2 className="font-sans text-5xl block font-bold text-black mb-6">
                    Experience human quality text to speech
                  </h2>
                  <span className="font-serif text-xl block font-normal text-gray-700">
                    Our Text to Speech model transcends typical voice generator
                    boundaries. By grasping the logic and emotions behind words,
                    our AI ensures each speech segment is contextually linked
                    for authentic intonation. This method allows it to
                    convincingly deliver longer fragments in any voice.
                  </span>
                </div>
                <div className="flex flex-col items-stretch">
                  <div className="content py-8 flex flex-col md:flex-row gap-4 md:gap-8 border-b-2 border-gray-100">
                    <div className="md:w-1/3 lg:w-11u flex-shrink-0 flex flex-col">
                      <span className="font-serif text-xl block font-normal text-gray-900 mb-4">
                        Speech Synthesis
                      </span>
                      <svg
                        width="220"
                        height="auto"
                        viewBox="0 0 295 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_237)">
                          <path
                            d="M294.491 -3.04731e-05L295 49.5448C295.003 49.8254 294.778 50.0557 294.497 50.0586C294.217 50.0614 293.987 49.8361 293.984 49.5556C293.984 49.5556 294.492 0.00427251 294.492 -3.04732e-05L294.491 -3.04731e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M292.266 -3.77024e-06L292.774 51.2863C292.777 51.5668 292.552 51.7972 292.271 51.8C291.99 51.8029 291.76 51.5776 291.757 51.2963C291.757 51.2963 292.266 0.00358586 292.266 -3.77024e-06Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M286.234 -5.33613e-05L286.742 55.7987C286.745 56.0793 286.519 56.3096 286.239 56.3117C285.958 56.3146 285.728 56.0886 285.726 55.808C285.726 55.808 286.234 0.00353245 286.234 -5.33614e-05L286.234 -5.33613e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M277.359 6.10796e-05L277.867 62.0118C277.87 62.2924 277.644 62.522 277.363 62.5242C277.083 62.5263 276.853 62.301 276.85 62.0197C276.85 62.0197 277.359 0.00292973 277.359 -0.000659898L277.359 6.10796e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M266.609 0.000122115L267.117 68.8571C267.119 69.1376 266.893 69.3672 266.613 69.3694C266.333 69.3715 266.103 69.1455 266.101 68.865C266.101 68.865 266.609 0.00299077 266.609 0.000839278L266.609 0.000122115Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M254.948 0.000114485L255.456 75.2645C255.458 75.5451 255.232 75.7747 254.951 75.7761C254.671 75.7783 254.441 75.5522 254.44 75.271C254.44 75.271 254.948 0.0022736 254.948 -0.000602678L254.948 0.000114485Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M243.341 8.39678e-05L243.849 80.1652C243.851 80.4457 243.625 80.6753 243.344 80.6768C243.064 80.6782 242.835 80.4522 242.833 80.1716C242.833 80.1716 243.342 0.00224309 243.342 8.39677e-05L243.341 8.39678e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M232.755 -7.58494e-06L233.263 82.4884C233.265 82.769 233.039 82.9986 232.759 83C232.478 83.0014 232.249 82.7754 232.247 82.4949C232.247 82.4949 232.756 0.00215153 232.756 -7.585e-06L232.755 -7.58494e-06Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M222.403 -7.62495e-05L222.912 82.0736C222.913 82.3542 222.687 82.5838 222.407 82.5852C222.127 82.5866 221.897 82.3606 221.896 82.0801C221.896 82.0801 222.404 0.00207524 222.404 -7.62496e-05L222.403 -7.62495e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M212.327 -5.33613e-05L212.836 80.3343C212.837 80.6149 212.611 80.8445 212.331 80.8459C212.051 80.8474 211.821 80.6214 211.82 80.3408C211.82 80.3408 212.328 0.00209813 212.328 -5.33614e-05L212.327 -5.33613e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M202.653 4.44557e-08L203.161 77.5626C203.164 77.8432 202.937 78.0728 202.656 78.0742C202.376 78.0756 202.147 77.8496 202.145 77.5691C202.145 77.5691 202.654 0.00215153 202.654 4.43929e-08L202.653 4.44557e-08Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M193.283 1.53032e-05L193.792 74.0131C193.794 74.2936 193.568 74.5232 193.287 74.5254C193.007 74.5275 192.777 74.3015 192.775 74.0202C192.775 74.0202 193.283 0.00288396 193.283 1.53032e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M184.121 -0.000114396L184.63 69.9388C184.632 70.2194 184.406 70.449 184.125 70.4512C183.845 70.4533 183.615 70.2273 183.613 69.946C183.613 69.946 184.122 0.00203709 184.122 -0.000114397L184.121 -0.000114396Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M175.069 7.67385e-06L175.578 65.5951C175.58 65.8756 175.354 66.1053 175.073 66.1074C174.793 66.1096 174.563 65.8835 174.561 65.603C174.561 65.603 175.07 0.00287633 175.07 7.67379e-06L175.069 7.67385e-06Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M166.031 6.48943e-05L166.539 61.2355C166.541 61.516 166.316 61.7456 166.035 61.7485C165.755 61.7507 165.525 61.5254 165.522 61.2441C165.522 61.2441 166.031 0.00293736 166.031 6.48943e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M156.908 -6.48054e-05L157.416 57.1146C157.419 57.3952 157.193 57.6248 156.913 57.6277C156.633 57.6305 156.403 57.4045 156.4 57.124C156.4 57.124 156.909 0.00352101 156.909 -6.48055e-05L156.908 -6.48054e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M147.604 3.0562e-05L148.112 53.4862C148.115 53.7668 147.889 53.9971 147.609 53.9993C147.328 54.0014 147.098 53.7761 147.096 53.4956C147.096 53.4956 147.604 0.00289921 147.604 3.0562e-05L147.604 3.0562e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M138.02 3.85915e-06L138.529 50.6046C138.532 50.8852 138.306 51.1155 138.025 51.1184C137.745 51.1213 137.515 50.8959 137.512 50.6147C137.512 50.6147 138.02 0.00358967 138.02 3.85915e-06Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M127.961 -3.81025e-05L128.47 48.7448C128.473 49.0253 128.248 49.2556 127.967 49.2585C127.687 49.2614 127.457 49.0361 127.454 48.7555C127.454 48.7555 127.962 0.00426869 127.962 -3.81026e-05L127.961 -3.81025e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M117.876 -1.13996e-05L118.384 48.2877C118.387 48.5683 118.162 48.7986 117.882 48.8015C117.601 48.8044 117.371 48.5791 117.368 48.2985C117.368 48.2985 117.877 0.00429158 117.877 -1.13997e-05L117.876 -1.13996e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M107.987 -4.19172e-05L108.496 49.0504C108.499 49.331 108.273 49.5613 107.993 49.5642C107.713 49.5671 107.482 49.3417 107.48 49.0612C107.48 49.0612 107.988 0.00426106 107.988 -4.19173e-05L107.987 -4.19172e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M98.2539 -6.09907e-05L98.7624 50.7423C98.7653 51.0229 98.5401 51.2532 98.2589 51.2561C97.9785 51.2589 97.7483 51.0336 97.7454 50.7524C97.7454 50.7524 98.2539 0.00352864 98.2539 -6.09907e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M88.6348 -2.66584e-05L89.1433 53.0722C89.1462 53.3527 88.9209 53.583 88.6398 53.5852C88.3587 53.5873 88.1292 53.3628 88.127 53.0815C88.127 53.0815 88.6355 0.00284199 88.6355 -0.000743822L88.6348 -2.66584e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M79.0901 0.000125929L79.5986 55.7487C79.6015 56.0292 79.3756 56.2595 79.0951 56.2617C78.8147 56.2646 78.5845 56.0385 78.5823 55.758C78.5823 55.758 79.0908 0.00371174 79.0908 0.000125929L79.0901 0.000125929Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M69.5779 4.44564e-08L70.0864 58.4809C70.0886 58.7614 69.8634 58.991 69.5822 58.9939C69.3018 58.996 69.0723 58.7707 69.0694 58.4895C69.0694 58.4895 69.5779 0.0028687 69.5779 4.44564e-08Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M60.0591 8.39678e-05L60.5676 60.9779C60.5698 61.2585 60.3446 61.4881 60.0634 61.491C59.783 61.4931 59.5535 61.2678 59.5506 60.9865C59.5506 60.9865 60.0591 0.00295643 60.0591 8.39678e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M50.4915 -2.66584e-05L51 62.9481C51.0021 63.2287 50.7762 63.4583 50.4958 63.4604C50.2154 63.4626 49.9859 63.2366 49.9837 62.956C49.9837 62.956 50.4922 0.00284581 50.4922 -2.66585e-05L50.4915 -2.66584e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M40.835 -1.52143e-05L41.3435 64.1005C41.3456 64.381 41.1197 64.6106 40.8393 64.6128C40.5589 64.6149 40.3294 64.3889 40.3272 64.1084C40.3272 64.1084 40.8357 0.00285344 40.8357 -1.52144e-05L40.835 -1.52143e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M31.0493 -9.15083e-05L31.5578 64.1442C31.56 64.4247 31.3341 64.6543 31.0536 64.6565C30.7732 64.6586 30.5437 64.4326 30.5415 64.1521C30.5415 64.1521 31.0501 0.00277714 31.0501 -9.15083e-05L31.0493 -9.15083e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M21.093 6.8709e-05L21.6015 62.7882C21.6037 63.0688 21.3778 63.2984 21.0973 63.3005C20.8169 63.3027 20.5874 63.0767 20.5853 62.7961C20.5853 62.7961 21.0938 0.00293736 21.0938 6.87089e-05L21.093 6.8709e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M10.9265 2.67473e-05L11.435 59.7409C11.4372 60.0214 11.212 60.251 10.9308 60.2539C10.6497 60.2567 10.4209 60.0307 10.418 59.7495C10.418 59.7495 10.9265 0.00289921 10.9265 2.67473e-05Z"
                            fill="#302B3F"
                          ></path>
                          <path
                            d="M0.507836 8.01531e-05L1.01633 54.7111C1.0192 54.9916 0.793277 55.222 0.512849 55.2241C0.23242 55.2263 0.00220333 55.001 5.16928e-05 54.7204C5.16928e-05 54.7204 0.508536 0.00366597 0.508536 8.0153e-05L0.507836 8.01531e-05Z"
                            fill="#302B3F"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_237">
                            <rect
                              width="295"
                              height="83"
                              fill="white"
                              transform="translate(295 83) rotate(180)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="font-serif text-base block font-normal text-gray-500 w-full lg:w-1/3">
                      Convert any writing to professional audio fast with our
                      Speech Synthesis tool. Powered by our proprietary deep
                      learning model, our text reader can voice anything from a
                      single sentence to an entire book, offering top quality
                      audio production at a fraction of traditional recording
                      times and costs.
                    </span>
                    <button
                      className="flex items-center btn btn-white btn-md btn-normal whitespace-nowrap md:absolute lg:relative lg:ml-auto self-end"
                      type="button"
                    >
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="content py-8 flex flex-col md:flex-row gap-4 md:gap-8 border-b-2 border-gray-100">
                    <div className="md:w-1/3 lg:w-11u flex-shrink-0 flex flex-col">
                      <span className="font-serif text-xl block font-normal text-gray-900 mb-4">
                        Voice Library
                      </span>
                      <svg
                        width="220"
                        height="auto"
                        viewBox="0 0 296 146"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M291.288 82.5061L290.856 145.834L290.425 82.5061H291.288Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M281.776 79.4988L281.336 145.256L280.897 79.4988H281.776Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M272.271 75.7595L271.816 145.834L271.362 75.7595H272.271Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M262.764 71.4558L262.296 145.834L261.828 71.4558H262.764Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M253.257 66.7571L252.777 145.257L252.296 66.7571H253.257Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M243.751 61.8311L243.257 145.257L242.762 61.8311H243.751Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M234.249 56.8472L233.736 145.834L233.225 56.8472H234.249Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M224.742 51.9717L224.218 145.834L223.692 51.9717H224.742Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M215.235 47.3755L214.697 145.834L214.159 47.3755H215.235Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M205.726 43.2246L205.176 145.834L204.627 43.2246H205.726Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M196.216 39.6885L195.658 145.834L195.098 39.6885H196.216Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M186.702 36.9368L186.138 145.256L185.573 36.9368H186.702Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M177.186 35.1355L176.617 145.111L176.048 35.1355H177.186Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M167.669 34.4539L167.098 145.257L166.526 34.4539H167.669Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M158.15 34.8384L157.578 145.834L157.006 34.8384H158.15Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M148.626 36.0784L148.058 145.834L147.49 36.0784H148.626Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M139.099 38.168L138.539 145.257L137.977 38.168H139.099Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M129.572 41.1023L129.018 145.834L128.463 41.1023H129.572Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M120.043 44.8774L119.498 145.834L118.953 44.8774H120.043Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M110.51 49.4871L109.979 145.834L109.446 49.4871H110.51Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M100.975 54.9285L100.459 145.834L99.9417 54.9285H100.975Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M91.4358 61.1956L90.9382 145.111L90.4421 61.1956H91.4358Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M81.8962 68.2837L81.4179 145.834L80.9412 68.2837H81.8962Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M72.3508 76.1887L71.8993 145.834L71.4463 76.1887H72.3508Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M295.15 69.255L295.575 7.96899L296 69.255H295.15Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M285.63 68.6312L286.055 7.34521L286.479 68.6312H285.63Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M276.111 67.0941L276.535 5.80811L276.959 67.0941H276.111Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M266.591 65.1441L267.016 3.85815L267.44 65.1441H266.591Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M257.071 63.2818L257.496 1.99585L257.92 63.2818H257.071Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M247.552 62.0077L247.975 0.72168L248.4 62.0077H247.552Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M238.031 61.8133L238.456 0.527344L238.881 61.8133H238.031Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M228.511 62.8795L228.936 1.59351L229.361 62.8795H228.511Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M218.979 65.0432L219.415 0L219.853 65.0432H218.979Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M209.451 68.1336L209.896 0.593994L210.342 68.1336H209.451Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M199.916 71.9741L200.376 0L200.837 71.9741H199.916Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M190.382 76.3936L190.856 0L191.329 76.3936H190.382Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M180.85 81.2201L181.337 0.593994L181.822 81.2201H180.85Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M171.315 86.2797L171.817 0.593994L172.319 86.2797H171.315Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M161.778 91.3988L162.296 0L162.815 91.3988H161.778Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M152.244 96.4065L152.777 0L153.309 96.4065H152.244Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M142.712 101.128L143.257 0L143.802 101.128H142.712Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M133.179 105.391L133.736 0L134.293 105.391H133.179Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M123.65 109.022L124.218 0L124.784 109.022H123.65Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M114.125 111.85L114.697 0.593994L115.269 111.85H114.125Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M104.601 113.7L105.177 0.742676L105.753 113.7H104.601Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M95.0789 114.4L95.6581 0.593994L96.2359 114.4H95.0789Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M85.5581 114.005L86.1374 0L86.7166 114.005H85.5581Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M76.0425 112.73L76.6173 0L77.1935 112.73H76.0425Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M66.5295 110.584L67.0984 0.593994L67.6657 110.584H66.5295Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M57.0151 107.571L57.578 0L58.1409 107.571H57.0151Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M47.5051 103.694L48.0576 0L48.6101 103.694H47.5051Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M37.9983 98.9593L38.5389 0L39.0781 98.9593H37.9983Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M28.4941 93.371L29.0184 0L29.5427 93.371H28.4941Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M18.9944 86.9333L19.4979 0.742676L20.0014 86.9333H18.9944Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M9.49487 79.6519L9.97757 0L10.4618 79.6519H9.49487Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M0 71.533L0.458938 0L0.917875 71.533H0Z"
                          fill="#302B3F"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-serif text-base block font-normal text-gray-500 w-full lg:w-1/3">
                      Share the unique synthetic voices you've created with our
                      vibrant community and discover voices crafted by others,
                      opening a world of auditory opportunity.
                    </span>
                    <button
                      className="flex items-center btn btn-white btn-md btn-normal whitespace-nowrap md:absolute lg:relative lg:ml-auto self-end"
                      type="button"
                    >
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="content py-8 flex flex-col md:flex-row gap-4 md:gap-8 border-b-2 border-gray-100">
                    <div className="md:w-1/3 lg:w-11u flex-shrink-0 flex flex-col">
                      <span className="font-serif text-xl block font-normal text-gray-900 mb-4">
                        VoiceLab
                      </span>
                      <svg
                        width="220"
                        height="auto"
                        viewBox="0 0 298 122"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M296.974 88.4185L297.487 1.51953L298 88.4185C298.002 88.7023 297.774 88.9337 297.49 88.9353C297.205 88.9368 296.972 88.7039 296.974 88.4185Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M294.72 90.1707L295.233 3.27173L295.746 90.1707C295.747 90.4545 295.519 90.6859 295.236 90.6874C294.951 90.689 294.718 90.456 294.72 90.1707Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M288.609 94.7075L289.122 7.80859L289.636 94.7075C289.637 94.9914 289.409 95.2228 289.126 95.2243C288.84 95.2259 288.608 94.9929 288.609 94.7075Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M279.622 100.954L280.135 14.0547L280.648 100.954C280.65 101.237 280.422 101.469 280.138 101.47C279.853 101.472 279.621 101.239 279.622 100.954Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M268.74 107.83L269.253 20.9314L269.766 107.83C269.767 108.114 269.539 108.346 269.256 108.347C268.971 108.349 268.738 108.116 268.74 107.83Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M256.94 114.26L257.454 27.3611L257.967 114.26C257.968 114.544 257.74 114.775 257.457 114.777C257.172 114.778 256.939 114.545 256.94 114.26Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M245.203 119.167L245.716 32.2681L246.229 119.167C246.231 119.451 246.003 119.682 245.719 119.684C245.434 119.685 245.202 119.452 245.203 119.167Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M234.509 121.471L235.022 34.5725L235.535 121.471C235.536 121.755 235.308 121.987 235.025 121.988C234.74 121.99 234.507 121.757 234.509 121.471Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M224.045 121.032L224.558 34.1331L225.072 121.032C225.073 121.316 224.845 121.547 224.562 121.549C224.277 121.55 224.044 121.317 224.045 121.032Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M194.649 112.859L195.163 25.9602L195.676 112.859C195.677 113.143 195.449 113.374 195.166 113.376C194.881 113.377 194.648 113.145 194.649 112.859Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M185.397 108.738L185.91 21.8386L186.423 108.738C186.425 109.021 186.197 109.253 185.913 109.254C185.628 109.256 185.396 109.023 185.397 108.738Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M176.257 104.346L176.77 17.4468L177.283 104.346C177.285 104.63 177.057 104.861 176.773 104.863C176.488 104.864 176.256 104.631 176.257 104.346Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M167.128 99.9417L167.642 13.0427L168.155 99.9417C168.156 100.226 167.928 100.457 167.645 100.458C167.36 100.46 167.127 100.227 167.128 99.9417Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M157.915 95.7798L158.428 8.88086L158.941 95.7798C158.942 96.0636 158.714 96.295 158.431 96.2966C158.146 96.2981 157.913 96.0652 157.915 95.7798Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M148.516 92.1174L149.029 5.21851L149.543 92.1174C149.544 92.4013 149.316 92.6327 149.033 92.6342C148.747 92.6358 148.515 92.4028 148.516 92.1174Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M138.837 89.2129L139.35 2.31396L139.863 89.2129C139.865 89.4967 139.637 89.7281 139.353 89.7297C139.068 89.7312 138.836 89.4983 138.837 89.2129Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M128.676 87.3433L129.189 0.444336L129.702 87.3433C129.704 87.6271 129.476 87.8585 129.192 87.8601C128.907 87.8616 128.674 87.6287 128.676 87.3433Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M118.496 86.8989L119.009 0L119.522 86.8989C119.524 87.1828 119.296 87.4142 119.012 87.4157C118.727 87.4173 118.495 87.1843 118.496 86.8989Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M108.513 87.6919L109.027 0.792969L109.54 87.6919C109.541 87.9757 109.313 88.2071 109.03 88.2087C108.745 88.2102 108.512 87.9773 108.513 87.6919Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M98.6868 89.4258L99.1998 2.52686L99.7129 89.4258C99.7145 89.7096 99.4864 89.941 99.2029 89.9426C98.9179 89.9441 98.6852 89.7112 98.6868 89.4258Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M69.7361 97.3269L70.2492 10.428L70.7622 97.3269C70.7638 97.6108 70.5357 97.8422 70.2522 97.8437C69.9672 97.8452 69.7346 97.6123 69.7361 87.3269Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M60.1248 99.8767L60.6378 12.9778L61.1509 99.8767C61.1524 100.161 60.9244 100.392 60.6409 100.394C60.3559 100.395 60.1232 100.162 60.1248 89.8767Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M50.4656 101.893L50.9787 14.9939L51.4917 101.893C51.4933 102.177 51.2652 102.408 50.9817 102.41C50.6967 102.411 50.464 102.178 50.4656 88.893Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M40.7158 103.079L41.2289 16.1804L41.742 103.079C41.7435 103.363 41.5155 103.595 41.232 103.596C40.9469 103.598 40.7143 103.365 40.7158 89.079Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M30.8352 103.144L31.3483 16.2451L31.8614 103.144C31.8629 103.428 31.6349 103.659 31.3514 103.661C31.0663 103.662 30.8337 103.429 30.8352 88.144Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M20.7832 105.788L21.2963 14.8892L21.8094 101.788C21.8109 102.072 21.5829 102.303 21.2994 102.305C21.0143 102.306 20.7817 102.073 20.7832 85.788Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M10.5188 107.7197L11.0319 11.8208L11.5449 98.7197C11.5465 99.0036 11.3185 99.235 11.035 103.2365C10.7499 99.2381 10.5173 99.0051 10.5188 98.7197Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M7.60888e-06 109.6402L0.513078 6.74121L1.02615 93.6402C1.02769 93.924 0.799658 105.1554 0.51616 94.1569C0.23112 94.1585 -0.00153314 93.9255 7.60888e-06 93.6402Z"
                          fill="#302B3F"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-serif text-base block font-normal text-gray-500 w-full lg:w-1/3">
                      Design new synthetic voices or clone your own with our
                      generative AI model. Whether you're creating a new voice
                      from scratch or cloning your speech profile from just a
                      minute of audio, our voice generator offers a limitless
                      creative outlet.
                    </span>
                    <button
                      className="flex items-center btn btn-white btn-md btn-normal whitespace-nowrap md:absolute lg:relative lg:ml-auto self-end"
                      type="button"
                    >
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="content py-8 flex flex-col md:flex-row gap-4 md:gap-8 border-b-2 border-gray-100">
                    <div className="md:w-1/3 lg:w-11u flex-shrink-0 flex flex-col">
                      <span className="font-serif text-xl block font-normal text-gray-900 mb-4">
                        Projects
                      </span>
                      <svg
                        width="220"
                        height="auto"
                        viewBox="0 0 296 146"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M295.15 69.255L295.575 7.96899L296 69.255H295.15Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M285.63 68.6312L286.055 7.34521L286.479 68.6312H285.63Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M276.111 67.0941L276.535 5.80811L276.959 67.0941H276.111Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M266.591 65.1441L267.016 3.85815L267.44 65.1441H266.591Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M257.071 63.2818L257.496 1.99585L257.92 63.2818H257.071Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M247.552 62.0077L247.975 0.72168L248.4 62.0077H247.552Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M238.031 61.8133L238.456 0.527344L238.881 61.8133H238.031Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M228.511 62.8795L228.936 1.59351L229.361 62.8795H228.511Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M218.979 65.0432L219.415 0L219.853 65.0432H218.979Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M209.451 68.1336L209.896 0.593994L210.342 68.1336H209.451Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M199.916 71.9741L200.376 0L200.837 71.9741H199.916Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M190.382 76.3936L190.856 0L191.329 76.3936H190.382Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M180.85 81.2201L181.337 0.593994L181.822 81.2201H180.85Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M171.315 86.2797L171.817 0.593994L172.319 86.2797H171.315Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M161.778 91.3988L162.296 0L162.815 91.3988H161.778Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M152.244 96.4065L152.777 0L153.309 96.4065H152.244Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M142.712 101.128L143.257 0L143.802 101.128H142.712Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M133.179 105.391L133.736 0L134.293 105.391H133.179Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M123.65 109.022L124.218 0L124.784 109.022H123.65Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M114.125 111.85L114.697 0.593994L115.269 111.85H114.125Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M104.601 113.7L105.177 0.742676L105.753 113.7H104.601Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M95.0789 114.4L95.6581 0.593994L96.2359 114.4H95.0789Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M85.5581 114.005L86.1374 0L86.7166 114.005H85.5581Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M76.0425 112.73L76.6173 0L77.1935 112.73H76.0425Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M66.5295 110.584L67.0984 0.593994L67.6657 110.584H66.5295Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M57.0151 107.571L57.578 0L58.1409 109.571H57.0151Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M47.5051 103.694L48.0576 0L48.6101 108.694H47.5051Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M37.9983 98.9593L38.5389 0L39.0781 107.1593H37.9983Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M28.4941 93.371L29.0184 0L29.5427 106.371H28.4941Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M18.9944 86.9333L19.4979 0.742676L20.0014 104.9333H18.9944Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M9.49487 79.6519L9.97757 0L10.4618 102.6519H9.49487Z"
                          fill="#302B3F"
                        ></path>
                        <path
                          d="M0 71.533L0.458938 0L0.917875 100.533H0Z"
                          fill="#302B3F"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-serif text-base block font-normal text-gray-500 w-full lg:w-1/3">
                      Our innovative workstation for directing and editing
                      audio, providing you with complete control over the
                      creative process. Whether it's adjusting pacing or
                      assigning voices to particular paragraphs, our interface
                      leverages our voice cloning and text to speech
                      technologies to help bring your storytelling vision to
                      reality.
                    </span>
                    <button
                      className="flex items-center btn btn-white btn-md btn-normal whitespace-nowrap md:absolute lg:relative lg:ml-auto self-end"
                      type="button"
                    >
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="max-w-7xl content pb-24 sm:pb-32 ">
            <div className="">
              <h2 className="font-sans text-5xl block font-bold text-black mb-6">
                Powered by cutting-edge research
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article
                // ref="/safety"
                className="relative shadow-md hover:shadow-lg isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-28 lg:pt-40"
              >
                <a href="/safety">
                  <img
                    src="../assets/images/research_pic1.png"
                    alt=""
                    //  ref="/safety"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <span className="font-serif text-sm block font-light text-gray-500 mr-8">
                    Mar 16, 2023
                  </span>
                  <h3 className="font-sans text-4xl block font-bold text-white mb-3 mt-2">
                    AI Safety
                  </h3>
                  <span className="font-serif text-base block font-normal text-gray-500">
                    Voice Cloning Guide: How to use our technology safely and
                    follow best practice.
                  </span>
                </a>
              </article>
              <article
                // ref="/blog/eleven-multilingual-v1/"
                className="relative shadow-md hover:shadow-lg isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-28 lg:pt-40"
              >
                <a href="/blog/eleven-multilingual-v1/">
                  <img
                    src="../assets/images/research_pic2.png"
                    alt=""
                    //  ref="/blog/eleven-multilingual-v1/"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <span className="font-serif text-sm block font-light text-gray-500 mr-8">
                    Apr 27, 2023
                  </span>
                  <h3 className="font-sans text-4xl block font-bold text-white mb-3 mt-2">
                    Eleven Multilingual v1
                  </h3>
                  <span className="font-serif text-base block font-normal text-gray-500">
                    Our most advanced speech synthesis model yet.
                  </span>
                </a>
              </article>
              <article
                // ref="/ai-speech-classifier"
                className="relative shadow-md hover:shadow-lg isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-28 lg:pt-40"
              >
                <a href="/ai-speech-classifier">
                  <img
                    src="../assets/images/research_pic3.png"
                    alt=""
                    // ref="/ai-speech-classifier"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <span className="font-serif text-sm block font-light text-gray-500 mr-8">
                    Jun 15, 2023
                  </span>
                  <h3 className="font-sans text-4xl block font-bold text-white mb-3 mt-2">
                    AI Speech Classifer
                  </h3>
                  <span className="font-serif text-base block font-normal text-gray-500">
                    Elevating safety standards for AI-generated audio content.
                  </span>
                </a>
              </article>
            </div>
          </div>
          <div className="bg-black py-8 sm:py-12 md:py-16 content mr-0">
            <div className="content pl-0">
              <div className="sm:text-left">
                <h3 className="font-sans text-4xl block font-semibold text-white mb-5">
                  Ethical AI
                </h3>
                <span className="font-serif text-lg block font-normal text-gray-300">
                  At Eleven, we believe that we should strive to make the most
                  of new technologies, but not at all cost. As we develop them,
                  we make every effort to implement appropriate safeguards which
                  minimize the risk of harmful abuse. With this in mind, we’re
                  fully committed both to respecting intellectual property
                  rights and to actioning misuse.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
