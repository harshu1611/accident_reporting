import { IonHeader, IonIcon, IonToolbar, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { locationOutline, notificationsOutline } from "ionicons/icons";
import React from "react";
// import { IonReactRouter } from "@ionic/react-router";

export default function Header({
  goBack,
  title,
}: {
  goBack: boolean;
  title: String;
}) {
  const router=useIonRouter()
  return (
    <IonHeader translucent={true} className="bg-white font-faculty">
      <div className="flex flex-row justify-between items-center text-black w-full p-2 font-bold">
        {/* <div className=''></div> */}
        {goBack ? (
          <IonIcon icon={arrowBack} color="blue" size="primary" onClick={()=>{
            router.goBack()
          }}></IonIcon>
        ) : (
          <div></div>
        )}
        <h1 className="ml-10">{title}</h1>
        <img src="/logo.png" className=" h-10 w-10"></img>
      </div>
    </IonHeader>
  );
}
