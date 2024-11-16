import { IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { EmergencySituation } from "../data/insProvider";
import Select from "react-select";
import { Geolocation } from "@capacitor/geolocation";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default function SOS5() {
  const router = useIonRouter();
  const [type, setType] = useState<string>("");
  const accTypes = [
    { name: "Vehicle hit with still object" },
    { name: "Vehicle hit with another vehicle" },
    {
      name: "Vehicle hit with still object and another vehicle",
    },
  ];

  // Function to handle selecting/deselecting an emergency service
  const options = accTypes.map((data: any) => ({
    value: data.name,
    label: (
      <div
        className="flex flex-row items-center"
        onClick={() => setType(data.name)}
      >
        {/* <img src={data.logo} className='h-6 w-6 mr-2' /> */}
        <span className="text-black">{data.name}</span>
      </div>
    ),
  }));
  const [photos, setPhotos] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: false, // Only allow taking a picture using the camera
    });

    if (image.webPath) {
      setPhotos((prevPhotos) => [...prevPhotos, image.webPath as string]);

      // Capture location
      const position = await Geolocation.getCurrentPosition();
      const locationString = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
      setLocations((prevLocations) => [...prevLocations, locationString]);

      // Capture timestamp
      const currentTime = new Date().toLocaleString();
      setTimestamps((prevTimestamps) => [...prevTimestamps, currentTime]);
    }
  };
  return (
    <IonPage className="bg-white">
      <Header goBack={true} title={"Accident Details"} />
      <div className="p-3 text-black font-faculty h-screen items-center flex flex-col overflow-y-scroll space-y-4">
        <img src="/logo.png" className="h-32 w-32 " alt="App Logo"></img>

        <h1 className="font-bold mt-4">Select Accident Type</h1>

        <Select
          options={options}
          className="basic-single"
          classNamePrefix="select"
          name="insurance-provider"
          placeholder="Select Accident Type"
        />
        <div className={`flex space-x-3 items-center overflow-x-auto w-full p-2 ${photos.length >0 ?"" :'justify-center'}`}>
          <button
            className="bg-white rounded-lg p-2 border-dashed border-2 border-blue-500 h-24 w-24 text-blue-500 flex-shrink-0"
            onClick={takePicture}
          >
            +<br></br>
            Add Photos
          </button>
          {photos.length > 0 && (
            photos.map((photo, index) => (
              <div key={index} className="flex-shrink-0 m-2 w-24">
                <img
                  src={photo}
                  alt={`Accident Proof ${index + 1}`}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <p className="text-[10px] text-gray-700 mt-1">Location: {locations[index]}</p>
                <p className="text-[10px] text-gray-700">Timestamp: {timestamps[index]}</p>
              </div>
            ))
          )}
        </div>

        <button
          className="bg-blue-500 rounded-lg p-2 text-white mt-4 w-full"
          onClick={() => {
            if (type !== "") {
              router.push("/sos6", "forward", "push"); // Changed to push to a new page
            } else {
              alert("Please select at least one service to proceed.");
            }
          }}
        >
          Proceed
        </button>
      </div>
    </IonPage>
  );
}
