import React, { useState } from 'react';

interface DropdownContainerProps { }

const DropdownContainer: React.FC<DropdownContainerProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleOptionSelect = (option: string) => {
        if (option !== "") {
            setSelectedOption(option);
        }
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setSelectedOption(null); // Reset selected option when toggling
    };

    return (
        <div className="pt-[5rem] pl-[20%]">
            {showDropdown ? (
                <div>
                    <button
                        onClick={toggleDropdown}
                        className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        style={{ height: '30px' }}
                    >
                        Cancel
                    </button>
                    <select
                        value={selectedOption || ""}
                        onChange={(e) => handleOptionSelect(e.target.value)}
                        className="border border-black rounded-lg"
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        <option value="option1">Mp4 to Subtitles</option>
                        <option value="option2">Mp4 to Mp3</option>
                        <option value="option3">Mp4 to Mp4 with Subtitles</option>
                    </select>
                    {selectedOption && (
                        <div className="container pr-[10%]">
                            <div className="border border-black rounded-lg relative">
                                {selectedOption === 'option1' && (
                                    <div className="container w-[80%] pl-[2%] pt-[2%]">
                                        <button
                                            className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Generate Subtitle
                                        </button>
                                        <div className='container w-[100%] pl-[2%] pt-[2%]'>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Select your Mp4 File</label>
                                            <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />

                                            <label className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">OR</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">MIN. 30sec Video (MAX. 1hr Video)</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" className="hidden" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                )}
                                {selectedOption === 'option2' && (
                                    <div>
                                        <button
                                            className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                            >
                                            Right Button
                                        </button>
                                        Content for Option 2
                                    </div>
                                )}
                                {selectedOption === 'option3' && (
                                    <div>
                                        <button
                                            className="absolute top-0 right-0 rounded-lg border border-black text-blue-700 hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                            >
                                            Right Button
                                        </button>
                                        Content for Option 3
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={toggleDropdown}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    style={{ height: '30px' }}
                >
                    Start Transcripts
                </button>
            )}
        </div>
    );
};

export default DropdownContainer;
