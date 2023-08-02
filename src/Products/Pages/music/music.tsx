import { useState, FormEvent } from "react";
import Model from "./model";
export default function Music() {
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
      <div className="pt-[5rem] pl-[88%]">
        <button
          type="button"
          value="form1"
          name="flexRadioDefault"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => showForm("form1" as unknown as number)}
          id="flexRadioDefault1"
        >
          Gnerate Music
        </button>
      </div>
      {selectedForm === ("form1" as unknown) && <Model />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        <div className="grid gap-4"></div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture1.png"
              alt=""
            />
            <div>
              <span>
                Design an assortment of adrenaline-pumping, high-tech sports set
                in the distant future
              </span>
            </div>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture2.png"
              alt=""
            />
            <span>
              Dive into the depths of the ocean and visualize an otherworldly
              underwater realm with exotic marine life and ancient ruins
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture3.png"
              alt=""
            />
            <span>
              Create a series of dream-like and surreal images that challenge
              reality and evoke emotions through abstract symbolism
            </span>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture4.png"
              alt=""
            />
            <span>
              World: Illustrate a world reclaimed by nature after an apocalyptic
              event, with abandoned cities, overgrown landscapes, and new
              wildlife
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture5.png"
              alt=""
            />
            <span>
              A digital illustration of a steampunk flying machine in space with
              cogs and mechanisms and eagles, 4k, detailed, trending in
              artstation, fantasy vivid colors
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture6.png"
              alt=""
            />
            <span>Cyberpunk style city street at night, Expressionism</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture7.png"
              alt=""
            />
            <span>Portrait of a Sci-Fi man, peaceful, digital art</span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture8.png"
              alt=""
            />
            <span>
              Generate an image of a grand, magical library filled with books
              that contain hidden knowledge and secrets
            </span>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="../imgs/Picture9.png"
              alt=""
            />
            <span>
              Visualize long-lost jungle ruins overgrown with exotic plants,
              hiding ancient artifacts and mysteries.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
