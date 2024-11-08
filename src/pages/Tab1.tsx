import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { mailOutline, lockClosedOutline } from "ionicons/icons";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Implement login functionality here
    console.log("Logging in with:", { email, password });
  };

  return (
    <IonPage >
      <div className="flex items-center justify-center h-screen bg-gray-100 ">
        <div className="w-full  p-8 space-y-6 bg-white rounded-lg shadow-md max-w-screen-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          <div className="space-y-4 flex-col text-black">
            <div className="flex flex-col">
              <div className="flex flex-row items-center space-x-2">
              <IonLabel className="text-gray-600">Email</IonLabel>
              <IonIcon
                  icon={mailOutline}
                  className=" top-2 left-2 text-gray-400"
                />
              </div>
              
              <div className="flex flex-row">
               
              <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center space-x-2">
              <IonLabel className="text-gray-600">Password</IonLabel>
              <IonIcon
                  icon={lockClosedOutline}
                  className=" top-2 left-2 text-gray-400"
                />
              </div>
              
              <div className="flex flex-row">
               
              <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            

            <IonButton
              expand="block"
              onClick={handleLogin}
              className="w-full py-2 mt-6 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </IonButton>

            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default LoginPage;
