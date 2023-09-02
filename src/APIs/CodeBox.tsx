import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeByLanguage = {
  [key: string]: string;
};

function CodeBox() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy Code");

  const codeByLanguage: CodeByLanguage = {
    python: `print("Hello, World!")`,
    javascript: `console.log("Hello, World!");`,
    // Add more languages and their corresponding code here
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const handleCopyCodeClick = () => {
    navigator.clipboard.writeText(codeByLanguage[selectedLanguage]);
    setCopyButtonText("Copied");

    // Reset the button text to "Copy Code" after 5 seconds
    setTimeout(() => {
      setCopyButtonText("Copy Code");
    }, 5000);
  };

  return (
    <>
      <div className="flex items-center mb-2">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="border rounded-md px-2 py-1"
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          {/* Add more language options here */}
        </select>
        <div className="ml-2">
          <button
            onClick={handleCopyCodeClick}
            className="border rounded-md px-4 py-1"
          >
            {copyButtonText}
          </button>
        </div>
      </div>
      <div className="code-box max-h-96 overflow-y-auto">
        <SyntaxHighlighter language={selectedLanguage} style={darcula}>
          {codeByLanguage[selectedLanguage]}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default CodeBox;
