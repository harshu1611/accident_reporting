import { IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import CarComponent from "../components/CarComponent";

export default function SOS2() {
  const router=useIonRouter()
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
      <Header goBack={true} title={"Add Accident Proofs"} />
      <div className="flex flex-col text-black font-faculty h-screen items-center space-y-2 p-2">
        <h1 className="font-bold">Add Primary Damage Photos</h1>
        <h1 className="font-bold">Reporting Location:</h1>
        <h1 className="font-bold">Policy:</h1>

        <div className='flex space-x-3 items-center overflow-x-auto w-full p-2'>
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

        

        <CarComponent/>
        {photos.length > 0 && (
          <button className="bg-blue-500 rounded-lg p-2 text-white mt-4" onClick={()=>{router.push("/sos3")}}>Proceed</button>
        )}
      </div>
    </IonPage>
  );
}
