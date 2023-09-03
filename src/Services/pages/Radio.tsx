import { useState, FormEvent } from "react";

const Test = () => {
  const [selectedForm, setSelectedForm] = useState("form1");

  const showForm = (formId: string) => {
    setSelectedForm(formId);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform save changes logic here
    // After saving, move to the next form
    if (selectedForm === "form1") {
      setSelectedForm("form2");
    } else if (selectedForm === "form2") {
      setSelectedForm("form3");
    } else {
      // You can handle what happens after the last form here
    }
  };

  const handleSkip = () => {
    // Move to the next form
    if (selectedForm === "form1") {
      setSelectedForm("form2");
    } else if (selectedForm === "form2") {
      setSelectedForm("form3");
    } else {
      // You can handle what happens after the last form here
    }
  };

  return (
    <>
      <div className="block">
        <section className="py-6">
          <div className="container pt-[10%] w-[900px] relative m-auto">
            <div className="continer flex  space-x-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="form1"
                  checked={selectedForm === "form1"}
                  onClick={() => showForm("form1")}
                />
                <label
                  className="form-check-label pl-4"
                  htmlFor="flexRadioDefault1"
                >
                  Images
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="form2"
                  checked={selectedForm === "form2"}
                  onClick={() => showForm("form2")}
                />
                <label
                  className="form-check-label pl-4"
                  htmlFor="flexRadioDefault2"
                >
                  3D
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value="form3"
                  checked={selectedForm === "form3"}
                  onClick={() => showForm("form3")}
                />
                <label
                  className="form-check-label pl-4"
                  htmlFor="flexRadioDefault3"
                >
                  Music
                </label>
              </div>
            </div>
            <div className="container pt-6">
              {selectedForm === "form1" && (
                <form onSubmit={handleSubmit} noValidate action="/twostep">
                  <div className=" container border border-black rounded-lg w-[900px] relative m-auto">
                    <div className="container p-[5%]">
                      <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-[30%] absolute bottom-0 right-0">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
                          onClick={handleSkip} // Added Skip button onClick handler
                        >
                          Skip
                        </button>
                        <button
                          type="submit" // Changed to type="submit" to trigger form submission
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {selectedForm === "form2" && (
                <form onSubmit={handleSubmit}>
                  <div className=" container border border-black rounded-lg w-[900px] relative m-auto">
                    <div className="container p-[5%]">
                      <div className="grid grid-cols-2 gap-4 w-[30%] absolute bottom-0 right-0">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
                          onClick={handleSkip} // Added Skip button onClick handler
                        >
                          Skip
                        </button>
                        <button
                          type="submit" // Changed to type="submit" to trigger form submission
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {selectedForm === "form3" && (
                <form onSubmit={handleSubmit}>
                  <div className=" container border border-black rounded-lg w-[900px] relative m-auto">
                    <div className="container p-[5%]">
                      <div className="grid grid-cols-1 gap-4 w-[15%] absolute bottom-0 right-0">
                        <button
                          type="submit" // Changed to type="submit" to trigger form submission
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Test;
