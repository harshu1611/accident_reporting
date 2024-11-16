import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
} from "@ionic/react";
import React from "react";
import {
  searchOutline,
  locationOutline,
  notificationsOutline,
  alertCircleOutline,
} from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import Header from "../components/Header";
import {
  accRepAss,
  EmergencySituation,
  manageInsurace,
  ourServices,
} from "../data/insProvider";

export default function Home() {
  const router = useIonRouter();
  return (
    <IonPage className="font-faculty bg-white">
      {/* Header */}

      <Header goBack={false} title={"Home"} />

      {/* SOS Button */}

      {/* <IonButton color="danger" shape="round" className="flex items-center space-x-2 p-4 ">
          <IonIcon icon={alertCircleOutline} className="text-white text-2xl" />
          <span className="text-white font-bold text-lg">SOS</span>
        </IonButton> */}

      {/* Content */}

      <div className="font-faculty p-2 overflow-scroll">
        <div className="flex w-full justify-center">
          <button
            className="bg-red-600 rounded-lg w-fit p-2 text-white flex mt-5"
            onClick={() => {
              router.push("/sos1", "forward");
            }}
          >
            SOS
          </button>
        </div>

        {/* Search Bar */}

        <div className="mt-5 p-2">
          <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2">
            <IonIcon
              icon={searchOutline}
              className="text-2xl text-gray-500 mr-2"
            />
            <IonInput
              placeholder="Search here"
              className="text-base text-gray-700"
            />
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="relative w-full rounded-lg overflow-hidden my-5 p-2">
          <img
            src="/welcomHeader2.png"
            alt="Promotional Banner"
            className="w-full rounded-xl"
          />
          {/* <div className="absolute top-0 left-0 p-5 text-white bg-gradient-to-r from-black/60">
            <h2 className="text-lg font-bold">
              Get up to 20% Off On Accident Reporting Services
            </h2>
            <p className="text-sm">Use code ACCIDENT20</p>
          </div> */}
        </div>

        {/* Our Services */}
        <div className="my-6">
          <div className="flex justify-between items-center mb-4 p-2">
            <h3 className="text-xl font-bold text-gray-800">Our Services</h3>
            <IonButton fill="clear" color="primary" size="small">
              See all
            </IonButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2">
            {ourServices.map((service) => (
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50 transition-all">
                <img src={service.image} className="mb-3" />
                <span className="text-sm text-center font-semibold text-gray-800">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Section */}
        <div className="w-full rounded-lg overflow-hidden my-6 bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white">
          <h2 className="text-lg font-bold mb-2">Become our Premium Member</h2>
          <p className="text-sm mb-4">
            Get exclusive access to AI-powered insurance reports and live claim
            assistance
          </p>
          <IonButton color="light" size="small">
            Learn More
          </IonButton>
        </div>

        {/* Accident Reporting & Assistance */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Accident Reporting & Assistance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {accRepAss.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-blue-50 hover:bg-blue-100 transition-all"
                onClick={()=>{
                  feature.name=="AI Report Generator" ?
                  router.push("/aireport","forward","push")
                  :
                  ''
                }}
              >
                <img src={feature.image} alt={feature.name} className="mb-3" />
                <span className="text-sm text-center font-semibold text-blue-800">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Situation */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Emergency Situation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EmergencySituation.map((situation) => (
              <div
                key={situation.name}
                className="flex flex-col items-center p-4 border rounded-lg bg-red-50 shadow-md hover:bg-red-100 transition-all"
              >
                <img
                  src={situation.image}
                  alt={situation.name}
                  className="mb-3 h-32 w-32"
                />
                <span className="text-sm text-center font-semibold text-red-700">
                  {situation.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Management */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Manage Your Insurance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {manageInsurace.map((management) => (
              <div
                key={management.name}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-green-50 hover:bg-green-100 transition-all"
                onClick={() => {
                  management.name == "Add Insurance Details"
                    ? router.push("/addInsurance", "forward", "push")
                    : management.name == "Claim History"
                    ? router.push("/history", "forward", "push")
                    : management.name=="View Policies" 
                    ? router.push("/policies", "forward", "push")
                    
                    :
                    ''
                    
                }}
              >
                <img
                  src={management.image}
                  alt={management.name}
                  className="mb-3"
                />
                <span className="text-sm text-center font-semibold text-green-700">
                  {management.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IonPage>
  );
}
