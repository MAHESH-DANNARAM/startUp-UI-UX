import { FunctionComponent, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SpecialPremiumAccountContainerType = {
  dimensionCode?: string;
};

const SpecialPremiumAccountContainer: FunctionComponent<
  SpecialPremiumAccountContainerType
> = ({ dimensionCode }) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setAudioFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (audioFile) {
      const formData = new FormData();
      formData.append("audio", audioFile);

      axios
        .post("http://localhost:5000/transcribe", formData) // Replace with the correct backend endpoint URL
        .then((response) => {
          const transcriptionResult = response.data["transcription"]; // Access response data correctly
          setTranscription(transcriptionResult);
        })
        .catch((error) => {
          console.error("Error uploading and transcribing audio:", error);
          // Handle the error as needed
        });
    }
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className=" grid grid-rows-2 gap-4">
      <div className="rounded-[29.13px] bg-darkslategray-200 flex w-[90%] flex-row py-[0.85rem] px-[2.06rem] items-center justify-start gap-[0.91rem] text-left text-[2rem] text-white font-raleway">
        <section className="py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-4">
              <div className="max-w-xl">
                <label className="flex justify-center w-full h-14 px-4 transition bg-transparent bottom-2 outline outline-sky-600 rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <input
                      className="bg-sky-600"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* SVG path goes here */}
                    </svg>
                    <span className="font-medium text-white text-sm">
                      or drag and drop here to upload
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    className="hidden bg-white"
                  />
                </label>
              </div>
              <div className="max-w-xl">
                <Button variant="contained" onClick={handleUpload}>
                  Upload
                </Button>
              </div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Download Type</InputLabel>
                  <Select
                    className=" text-white"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Download Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Subtitles</MenuItem>
                    <MenuItem value={2}>Video with Subtitles</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </section>
      </div>

      <div className="rounded-[29.13px] bg-darkslategray-200 flex w-[90%] flex-row py-[0.85rem] px-[2.06rem] items-center justify-start gap-[0.91rem] text-left text-[2rem] text-white font-raleway">
        <section className="py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-4">
              <div className="max-w-xl">
                <label className="flex justify-center w-full h-14 px-4 transition bg-transparent bottom-2 outline outline-sky-600 rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <input
                      className="bg-sky-600 pl-[13rem]"
                      type="text"
                      onChange={handleFileChange}
                    />
                  </span>
                </label>
              </div>
              <div className="max-w-xl">
                <Button variant="contained" onClick={handleUpload}>
                 Submit
                </Button>
              </div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Download Type</InputLabel>
                  <Select
                    className=" text-white"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Download Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={3}>Video</MenuItem>
                    <MenuItem value={4}>Subtitles</MenuItem>
                    <MenuItem value={5}>Video with Subtitles</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialPremiumAccountContainer;
