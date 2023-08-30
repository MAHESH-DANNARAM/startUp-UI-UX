import React, { useState } from "react";

interface DropdownContainerProps {}

const DropdownContainer: React.FC<DropdownContainerProps> = () => {
  const storedSelectedOption = localStorage.getItem("selectedOption");
  const [selectedOption, setSelectedOption] = useState<string | null>(
    storedSelectedOption
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(
    Boolean(storedSelectedOption)
  );
  const [subtitleGenerated, setSubtitleGenerated] = useState<boolean>(false);
  const [mp3Generated, setMp3Generated] = useState<boolean>(false);
  const [mp4SubtitleGenerated, setMp4SubtitleGenerated] =
    useState<boolean>(false);
  const [ytbMp4Generated, setYtbMp4Generated] = useState<boolean>(false);
  const [ytbSubtitleGenerated, setYtbSubtitleGenerated] =
    useState<boolean>(false);
  const [ytbMp3Generated, setYtbMp3Generated] = useState<boolean>(false);
  const [generationInProgress, setGenerationInProgress] =
    useState<boolean>(false);

  const handleOptionSelect = (option: string) => {
    if (option !== "") {
      setSelectedOption(option);
      localStorage.setItem("selectedOption", option); // Store in local storage
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      // Store the last selected option when showing the dropdown
      localStorage.setItem("selectedOption", selectedOption || "");
    } else {
      // Reset selected option when hiding the dropdown
      setSelectedOption(null);
    }
    setSubtitleGenerated(false); // Reset subtitle generation status
    setMp3Generated(false); // Reset MP3 generation status
    setMp4SubtitleGenerated(false); // Reset subtitle generation status
    setYtbMp4Generated(false); // Reset MP3 generation status
    setYtbSubtitleGenerated(false); // Reset subtitle generation status
    setYtbMp3Generated(false); // Reset MP3 generation status
  };

  const handleGenerateSubtitle = () => {
    // Simulate generating a subtitle (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setSubtitleGenerated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateMp3 = () => {
    // Simulate generating an MP3 (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setMp3Generated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateMp4Subtitle = () => {
    // Simulate generating a subtitle (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setMp4SubtitleGenerated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateYtbMp4 = () => {
    // Simulate generating an MP3 (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setYtbMp4Generated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateYtbSubtitle = () => {
    // Simulate generating a subtitle (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setYtbSubtitleGenerated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateYtbMp3 = () => {
    // Simulate generating an MP3 (replace this with your actual logic)
    setGenerationInProgress(true);
    setTimeout(() => {
      setYtbMp3Generated(true);
      setGenerationInProgress(false);
    }, 2000); // Simulating a delay, replace this with your actual generation process
  };

  const handleGenerateNew = () => {
    // Reset the component's state to its initial values
    setShowDropdown(true);
    setSelectedOption(localStorage.getItem("selectedOption"));
    setSubtitleGenerated(false);
    setMp3Generated(false);
    setGenerationInProgress(false);
    setMp4SubtitleGenerated(false);
    setYtbMp4Generated(false);
    setYtbSubtitleGenerated(false);
    setYtbMp3Generated(false);
  };

  return (
    <div className="pt-[5rem] pl-[20%]">
      {showDropdown ? (
        <div>
          <button
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            style={{ height: "30px" }}
          >
            Cancel
          </button>
          <select
            value={selectedOption || ""}
            onChange={(e) => handleOptionSelect(e.target.value)}
            className="border border-black rounded-lg"
            disabled={generationInProgress} // Disable the dropdown during generation
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Mp4 to Subtitles</option>
            <option value="option2">Mp4 to Mp3</option>
            <option value="option3">Mp4 to Mp4 with Subtitles</option>
            <option value="option4">Ytb to Mp4</option>
            <option value="option5">Ytb to Mp3</option>
            <option value="option6">Ytb to Mp4 with Subtitles</option>
          </select>
          {selectedOption &&
          !subtitleGenerated &&
          !mp3Generated &&
          !mp4SubtitleGenerated &&
          !ytbMp4Generated &&
          !ytbSubtitleGenerated &&
          !ytbMp3Generated ? (
            <div className="container pr-[10%]">
              <div className="border border-black rounded-lg relative">
                {selectedOption === "option1" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateSubtitle}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate Subtitle
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        Select your Mp4 File to Generate Subtitle
                      </label>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="file"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedOption === "option2" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateMp3}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate MP3
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        Select your Mp4 File to Generate Mp3
                      </label>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="file"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedOption === "option3" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateMp4Subtitle}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate Mp4 with Subtitles
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        Select your Mp4 File to Generate Mp4 with Subtitles
                      </label>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="file"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedOption === "option4" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateYtbMp4}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate Mp4
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        Select your Link to Generate Mp4
                      </label>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="file"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedOption === "option5" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateYtbMp3}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate Mp3
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        Select your Mp4 File
                      </label>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="file"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedOption === "option6" && (
                  <div className="container w-[80%] pl-[2%] pt-[2%]">
                    <button
                      onClick={handleGenerateYtbSubtitle}
                      className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Generate Mp4 with Sub
                    </button>
                    <div className="container w-[100%] pl-[2%] pt-[2%]">
                      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select your Mp4 File
                      </div>
                      <input
                        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                        id="default_size"
                        type="link"
                      />

                      <label
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        OR
                      </label>

                      <div className="flex items-center justify-center w-full pb-[2%]">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MIN. 30sec Video (MAX. 1hr Video)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : subtitleGenerated ? (
            // Render the content when subtitle is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your Subtitle File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download Subtitle
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : mp3Generated ? (
            // Render the content when MP3 is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your MP3 File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download MP3
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : mp4SubtitleGenerated ? (
            // Render the content when subtitle is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your Mp4 with Subtitle File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download File
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : ytbMp4Generated ? (
            // Render the content when MP3 is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your MP3 File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download File
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : ytbMp3Generated ? (
            // Render the content when MP3 is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your MP3 File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download File
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : ytbSubtitleGenerated ? (
            // Render the content when subtitle is generated
            <div>
              {/* Display the output */}
              <div className="container pr-[10%]">
                <div className="border border-black rounded-lg relative">
                  <div className="container w-[100%] pl-[8%] pr-[10%] pt-[2%]">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="default_size"
                    >
                      Your Mp4 with Subtitle File
                    </label>
                    <input
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type=""
                    />
                    <div className="flex items-center justify-center w-full pb-[2%]">
                      <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 p-[9px] focus:ring-green-300 font-medium rounded-lg text-sm px-5 mt-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600">
                        Download File
                      </button>
                      <button
                        onClick={handleGenerateNew}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 p-[9px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <button
          onClick={toggleDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          style={{ height: "30px" }}
        >
          Start Transcripts
        </button>
      )}
    </div>
  );
};

export default DropdownContainer;
