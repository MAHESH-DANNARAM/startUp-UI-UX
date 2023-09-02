import { useState, ChangeEvent, FormEvent } from "react";

const Test = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [selectedForm, setSelectedForm] = useState<number | null>(null);

  const showForm = (formId: number | null) => {
    setSelectedForm(formId);
  };

  const [siteName, setSiteName] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [savedlocation, setSavedLocation] = useState<string>("");

  const handleSiteName = (e: ChangeEvent<HTMLInputElement>) => {
    setSiteName(e.target.value);
  };

  const handleAddress1 = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  };

  const handleAddress2 = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleZipcode = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  const handleSavedLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setSavedLocation(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform save changes logic here
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Logic to save the changes
    setIsEditing(false);
  };

  const handleReset = () => {
    setSiteName("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setZipcode("");
    setSavedLocation("");
  };
  return (
    <div>
      <section className="py-6">
        <div className="container">
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
                  Enter Address
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
                  Saved Location
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
                  Remote Location (No physical address)
                </label>
              </div>
            </div>
            <div className="container pt-6">
              {selectedForm === ("form1" as unknown) && (
                <form onSubmit={handleSubmit} noValidate action="/twostep">
                  <div className="text-15 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:space-y-6 w-full">
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        Site Name
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <input
                        className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 rounded-lg"
                        value={siteName}
                        onChange={handleSiteName}
                      />
                      <h4>
                        The dispaly name will be shared with the assigned
                        provider.
                      </h4>
                    </div>
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        Location
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <select className="cursor-pointer py-1.5 transition-all border focus:border-main-300 outline-none bg-altFour/80 border-altFour-dark text-main-600 px-4 rounded-lg">
                        <option value="">Please Select</option>
                        <option value="">Commercial</option>
                        <option value="">Educational</option>
                        <option value="">FoodService</option>
                        <option value="">Governement</option>
                        <option value="">Residentiall</option>
                        <option value="">Hospitality</option>
                        <option value="">Manufacturing</option>
                        <option value="">Medical</option>
                        <option value="">SeniorLiving</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        Country
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <select className="cursor-pointer py-1.5 transition-all border focus:border-main-300 outline-none bg-altFour/80 border-altFour-dark text-main-600 px-4 rounded-lg">
                        {/* <option value="">Please Select</option> */}
                        <option value="">United State of America</option>
                        <option value="">India</option>
                        <option value="">China</option>
                        <option value="">Other1</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-15 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:space-y-6 w-full mt-8">
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        Address Line 1
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <input
                        className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 rounded-lg"
                        value={address1}
                        onChange={handleAddress1}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        Address Line 2
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <input
                        className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 rounded-lg"
                        value={address2}
                        onChange={handleAddress2}
                      />
                    </div>
                  </div>
                  <div className="text-15 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:space-y-6 w-full mt-8">
                    <div className="flex flex-col">
                      <label className=" mb-1.5">
                        city<span className="text-danger text-red-500">*</span>
                      </label>
                      <input
                        className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 rounded-lg"
                        value={city}
                        onChange={handleCity}
                      />
                    </div>
                    <div className="text-15 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:space-y-6 w-full">
                      <div className="flex flex-col">
                        <label className=" mb-1.5">
                          State
                          <span className="text-danger text-red-500">*</span>
                        </label>
                        <select className="cursor-pointer py-1.5 transition-all border focus:border-main-300 outline-none bg-altFour/80 border-altFour-dark text-main-600 px-4 rounded-lg">
                          {/* <option value="">Please Select</option> */}
                          <option value="">United State of America</option>
                          <option value="">India</option>
                          <option value="">China</option>
                          <option value="">Other1</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className=" mb-1.5">
                          Zip code
                          <span className="text-danger text-red-500">*</span>
                        </label>
                        <input
                          className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 rounded-lg"
                          value={zipcode}
                          onChange={handleZipcode}
                        />
                      </div>
                    </div>
                  </div>
                  {isEditing ? (
                    <div className="flex justify-start mt-6 gap-3">
                      <button
                        className="bg-transparent hover:bg-main-200 transition-all rounded-lg text-main-500 px-4 border border-main-700 min-w-[100px] py-2"
                        type="button"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        className="bg-alt rounded-lg hover:bg-alt-dark transition-all text-main-100 px-4 py-2"
                        type="button"
                        onClick={handleSaveClick}
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-alt rounded-lg hover:bg-alt-dark transition-all text-main-100 px-8 py-2 mt-6"
                      type="button"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  )}
                </form>
              )}
              {selectedForm === ("form2" as unknown) && (
                <form onSubmit={handleSubmit}>
                  <div className="w-full">
                    <div className="flex flex-col">
                      <label className="font-medium mb-2">
                        SavedLocation
                        <span className="text-danger text-red-500">*</span>
                      </label>
                      <input
                        className="transition-all focus:border-main-300 outline-none border bg-altFour/60 border-altFour-dark text-main-500 px-4 py-2 rounded-lg"
                        value={savedlocation}
                        onChange={handleSavedLocation}
                      />
                    </div>
                  </div>
                  {isEditing ? (
                    <div className="flex justify-start mt-6 gap-3">
                      <button
                        className="bg-transparent hover:bg-main-200 transition-all rounded-lg text-main-500 px-4 border border-main-700 min-w-[100px] py-2"
                        type="button"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        className="bg-alt rounded-lg hover:bg-alt-dark transition-all text-main-100 px-4 py-2"
                        type="button"
                        onClick={handleSaveClick}
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-alt rounded-lg hover:bg-alt-dark transition-all text-main-100 px-8 py-2 mt-6"
                      type="button"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  )}
                </form>
              )}
              {selectedForm === ("form3" as unknown) && (
                <form onSubmit={handleSubmit}>
                  <div className="text-15 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:space-y-6 w-full">
                    <div className="flex flex-col">
                      <label className="font-medium mb-2 text-blue-600 italic">
                        No Physical Address. Work to be complete Remotely
                      </label>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        
      </section>
    </div>
  );
};
export default Test;
