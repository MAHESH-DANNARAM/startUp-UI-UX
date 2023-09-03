import { Link } from "react-router-dom";
import { useState } from "react";

export default function Services() {
  const [message, setMessage] = useState("");

  // Define the minimum and maximum character limits
  const minCharacterLimit = 1;
  const maxCharacterLimit = 100; // You can set your desired maximum character limit

  // Handle textarea input
  const handleInputChange = (event: { target: { value: any } }) => {
    const inputText = event.target.value;

    // Check if the input text meets the character limits
    if (
      inputText.length >= minCharacterLimit &&
      inputText.length <= maxCharacterLimit
    ) {
      setMessage(inputText);
    } else if (inputText.length > maxCharacterLimit) {
      // If the input exceeds the maximum character limit, truncate it
      setMessage(inputText.slice(0, maxCharacterLimit));
    } else {
      setMessage(""); // Clear the message if it doesn't meet the limits
    }
  };

  // Determine if the "Next" button should be disabled
  const isNextButtonDisabled = message.length < minCharacterLimit;

  // Tooltip message when hovering over the disabled "Next" button
  const tooltipMessage = "At least one character is required.";

  return (
    <>
      <div className="container pt-[10%] w-[900px] relative m-auto">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your text
        </label>
        <textarea
          id="message"
          className="pb-[35%] p-[5%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={message}
          onChange={handleInputChange}
          minLength={minCharacterLimit} // Set the minimum character limit
          maxLength={maxCharacterLimit} // Set the maximum character limit
        />
        <div className="grid grid-flow-row-dense grid-cols-1">
          <p className="text-gray-500 text-sm">
            Characters remaining: {maxCharacterLimit - message.length}
          </p>
          <Link
            to="/ser/choose/radio"
            className={`absolute right-0 mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2 ${
              isNextButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            title={isNextButtonDisabled ? tooltipMessage : ""}
            onClick={(e) => {
              if (isNextButtonDisabled) {
                e.preventDefault(); // Prevent navigation if the button is disabled
              }
            }}
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
}
