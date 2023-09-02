import { useState, FormEvent } from "react";

const Test = () => {

    const [selectedForm, setSelectedForm] = useState<number | null>(null);

    const showForm = (formId: number | null) => {
        setSelectedForm(formId);
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Perform save changes logic here
    };

    return (
        <>
            <div className="">
                <section className="py-6">
                    <div className="container w-[1000px] pt-[10%] relative m-auto">
                        <div className="continer flex  space-x-4">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    value="form1"
                                    onClick={() => showForm("form1" as unknown as number)}
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
                                    onClick={() => showForm("form2" as unknown as number)}
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
                                    onClick={() => showForm("form3" as unknown as number)}
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
                            {selectedForm === ("form1" as unknown) && (
                                <form onSubmit={handleSubmit} noValidate action="/twostep">
                                    <div className=" container border border-black w-[70%]">
                                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                           Save
                                        </button>
                                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                           Skip
                                        </button>
                                    </div>
                                </form>
                            )}
                            {selectedForm === ("form2" as unknown) && (
                                <form onSubmit={handleSubmit}>
                                    <div className=" container border border-black w-[70%]">

                                    </div>
                                </form>
                            )}
                            {selectedForm === ("form3" as unknown) && (
                                <form onSubmit={handleSubmit}>
                                    <div className=" container border border-black w-[70%]">

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
