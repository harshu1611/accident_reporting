import {
  IonPage,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useIonRouter } from "@ionic/react";
import { addedPolicies, InsuranceProviders } from "../data/insProvider";
import Header from "../components/Header";
import { Geolocation } from "@capacitor/geolocation";
import Select from "react-select";
import { Rings } from "react-loader-spinner";

export default function SOS1() {
  const router = useIonRouter();
  const [location, setLocation] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
  const [carName, setCarName] = useState("");

  // Fetch user's current location
  useEffect(() => {
    getLoc();
  }, []);

  const getLoc = async () => {
    const pos = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = pos.coords;
    setLocation(`Lat: ${latitude}, Long: ${longitude}`);
  };

  const startAccidentReportFlow = () => {
    if (!selectedPolicy) {
      alert("Please select an insurance policy to proceed.");
    } else {
      // Start the accident report flow
      router.push("/sos2", "forward", "push");
    }
  };

  const options = addedPolicies.map((data: any) => ({
    value: data.name,
    label: (
      <div
        className="flex flex-col"
        onClick={() => {
          setSelectedPolicy(data);
        }}
      >
        <div className="flex flex-row items-center w-full">
          <img src={data.logo} className="h-6 w-6 mr-2" />
          <span className="text-black">{data.name}</span>
        </div>
        <h1 className="text-black">Policy No: {data.policy}</h1>
        <h1 className="text-black">Car Model: {data.vehicle}</h1>
      </div>
    ),
  }));

  return (
    <IonPage className="bg-white">
      <Header goBack={true} title={"SOS"} />
      <div className="bg-white h-screen text-black font-faculty p-5 space-y-4 items-center flex flex-col">
        <img src="/logo.png" className="h-20 w-20"></img>
        <h1 className="text-2xl font-bold">SOS - Accident Reporting</h1>

        {/* Display the user's location */}
        <div className="text-sm">
          {location !== "" ? (
            <Rings height="80" width="80" color="blue" ariaLabel="loading" />
          ) : (
            <>
              <strong>Current Location:</strong>

              <p>{location}</p>
            </>
          )}
        </div>

        {/* Car and Insurance Policy Selection */}
        <div className="mt-4">
          <Select
            options={options}
            className="basic-single w-full"
            classNamePrefix="select"
            name="insurance-provider"
            placeholder="Select Insurance Provider"
          />
        </div>

        {/* Display the car name associated with the insurance policy */}
        {carName && (
          <div className="text-sm mt-4">
            <strong>Car Name:</strong>
            <p>{carName}</p>
          </div>
        )}

        {/* Button to start accident report */}
        <button
          onClick={startAccidentReportFlow}
          className="mt-8 bg-red-600 p-2 rounded-lg text-white"
        >
          Report Accident
        </button>
        <h1 className="text-blue-600 underline" onClick={getLoc}>
          Re Fetch Current Location
        </h1>
      </div>
    </IonPage>
  );
}

// In SOS2 Component
