import Model from "@/Products/Pages/music/model";
import { useState, FormEvent } from "react";
export default function Test() {
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
      <div className="pt-[5rem] pl-[81%]">
        <button
          type="button"
          value="form1"
          name="flexRadioDefault"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => showForm("form1" as unknown as number)}
          id="flexRadioDefault1"
        >
          Gnerate Image
        </button>
      </div>
      {selectedForm === ("form1" as unknown) && <Model />}
      <section id="portfolio">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img
                  src="/src/components/frontend/assets/imgs/Picture1.png"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Design an assortment of adrenaline-pumping, high-tech
                      sports set in the distant future
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture2.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Dive into the depths of the ocean and visualize an
                      otherworldly underwater realm with exotic marine life and
                      ancient ruins
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture3.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Create a series of dream-like and surreal images that
                      challenge reality and evoke emotions through abstract
                      symbolism
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture4.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      World: Illustrate a world reclaimed by nature after an
                      apocalyptic event, with abandoned cities, overgrown
                      landscapes, and new wildlife
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture5.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      A digital illustration of a steampunk flying machine in
                      space with cogs and mechanisms and eagles, 4k, detailed,
                      trending in artstation, fantasy vivid colors
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture6.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Cyberpunk style city street at night, Expressionism
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture7.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>Portrait of a Sci-Fi man, peaceful, digital art</span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture8.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Generate an image of a grand, magical library filled with
                      books that contain hidden knowledge and secrets
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-wrapper">
                <img src="/src/components/frontend/assets/imgs/Picture4.png" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Prompt :-</h5>
                    <span>
                      Visualize long-lost jungle ruins overgrown with exotic
                      plants, hiding ancient artifacts and mysteries.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
