import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput } from '@ionic/react';
import React from 'react';
import { searchOutline, locationOutline, notificationsOutline } from 'ionicons/icons';
import { useIonRouter } from '@ionic/react';
import Header from '../components/Header';

export default function Home() {
  const router=useIonRouter()
  return (
    <IonPage className='font-faculty'>
      {/* Header */}
      <Header goBack={false} title={"Home"}/>

      {/* Content */}
      <IonContent className="ion-padding font-faculty">
        {/* Search Bar */}
        <div className="my-5">
          <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2">
            <IonIcon icon={searchOutline} className="text-2xl text-gray-500 mr-2" />
            <IonInput placeholder="Search here" className="text-base text-gray-700" />
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="relative w-full rounded-lg overflow-hidden my-5">
          <img src="https://via.placeholder.com/400x150" alt="Promotional Banner" className="w-full" />
          <div className="absolute top-0 left-0 p-5 text-white bg-gradient-to-r from-black/60">
            <h2 className="text-lg font-bold">Get up to 20% Off On Accident Reporting Services</h2>
            <p className="text-sm">Use code ACCIDENT20</p>
          </div>
        </div>

        {/* Our Services */}
        <div className="my-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Our Services</h3>
            <IonButton fill="clear" color="primary" size="small">See all</IonButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {['Report Accident', 'Insurance Claim', 'Medical Assistance', 'Roadside Assistance', 'Accident Report Assistance', 'Insurance Details'].map((service) => (
              <div key={service} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50 transition-all">
                <img src="https://via.placeholder.com/50" alt={service} className="mb-3" />
                <span className="text-sm text-center font-semibold text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Section */}
        <div className="w-full rounded-lg overflow-hidden my-6 bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white">
          <h2 className="text-lg font-bold mb-2">Become our Premium Member</h2>
          <p className="text-sm mb-4">Get exclusive access to AI-powered insurance reports and live claim assistance</p>
          <IonButton color="light" size="small">Learn More</IonButton>
        </div>

        {/* Accident Reporting & Assistance */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Accident Reporting & Assistance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {['Real-Time Claim', 'Accident Report Assistance', 'AI Report Generator', 'Live Location Updates'].map((feature) => (
              <div key={feature} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-blue-50 hover:bg-blue-100 transition-all">
                <img src="https://via.placeholder.com/50" alt={feature} className="mb-3" />
                <span className="text-sm text-center font-semibold text-blue-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Situation */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Situation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {['I had an accident', 'I need medical help', 'Request Tow Service'].map((situation) => (
              <div key={situation} className="flex flex-col items-center p-4 border rounded-lg bg-red-50 shadow-md hover:bg-red-100 transition-all">
                <img src="https://via.placeholder.com/50" alt={situation} className="mb-3" />
                <span className="text-sm text-center font-semibold text-red-700">{situation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Management */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Manage Your Insurance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {['Add Insurance Details', 'View Policies', 'Renew Policy', 'Claim History'].map((management) => (
              <div key={management} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-green-50 hover:bg-green-100 transition-all" onClick={()=>{
                    router.push("/addInsurance","forward","push")
              }}>
                <img src="https://via.placeholder.com/50" alt={management} className="mb-3" />
                <span className="text-sm text-center font-semibold text-green-700">{management}</span>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}