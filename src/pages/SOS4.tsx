import { IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { EmergencySituation } from "../data/insProvider";

export default function SOS4() {
  const router = useIonRouter();
  const [selected, setSelected] = useState<string[]>([]);

  // Function to handle selecting/deselecting an emergency service
  const handlePartClick = (part: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(part)) {
        // If already selected, remove from selection
        return prevSelected.filter((item) => item !== part);
      } else {
        // Otherwise, add to selection
        return [...prevSelected, part];
      }
    });
  };

  return (
    <IonPage className="bg-white">
      <Header goBack={true} title={"Emergency Services"} />
      <div className="p-3 text-black font-faculty h-screen items-center justify-center flex flex-col overflow-y-scroll">
        <img src="/logo.png" className="h-32 w-32 " alt="App Logo"></img>

        <h1 className="font-bold mt-4">Select Emergency Services</h1>

        <div className="my-6 w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EmergencySituation.map((situation,index) => {
              const isSelected = selected.includes(situation.name);
              return (
                index !==0 &&
                <div
                  key={situation.name}
                  className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    isSelected ? "bg-red-400" : "bg-gray-100"
                  } shadow-md`}
                  onClick={() => {
                    handlePartClick(situation.name);
                  }}
                >
                  <img
                    src={situation.image}
                    alt={situation.name}
                    className="mb-3 h-32 w-32"
                  />
                  <span
                    className={`text-sm text-center font-semibold ${
                      isSelected ? "text-white" : "text-red-700"
                    }`}
                  >
                    {situation.name}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            className="bg-blue-500 rounded-lg p-2 text-white mt-4 w-full"
            onClick={() => {
              
                router.push("/sos5", "forward", "push"); // Changed to push to a new page
              
                
              
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </IonPage>
  );
}
