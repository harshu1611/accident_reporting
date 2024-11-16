import { IonPage } from '@ionic/react';
import React from 'react';
import { useIonRouter } from '@ionic/react';
import Header from '../components/Header';

export default function GetInsurance() {
  const router = useIonRouter();

  return (
    <IonPage className='bg-white'>
      <Header goBack={true} title={"Insurance Details"}/>
      <div className='flex flex-col font-faculty overflow-scroll items-center w-screen p-3'>
      <img src="/logo.png" className=" h-32 w-32 " alt="App Logo"></img>

        {/* Title */}
        <h1 className='text-black text-center text-xl underline'>Insurance Details</h1>

        {/* Policy Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg w-full'>
          <h2 className='text-black font-bold mb-2'>Policy Details</h2>
          <p className='text-black'>
            <strong>Policy Number:</strong> Some Value
          </p>
        </div>

        {/* Car Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg w-full'>
          <h2 className='text-black font-bold mb-2'>Car Details</h2>
          <div className='flex items-center flex-col'>
            <img
              src="/images/car.jpg" // Placeholder image for car model
              alt="Car Model"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Car Model:</strong> Taigun
            </p>
            <p className='text-black'>
              <strong>Car Make:</strong> March 2024
            </p>
            <p className='text-black'>
              <strong>Reg No.:</strong> CG04BX3699
            </p>
          </div>
        </div>

        {/* Company Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg w-full'>
          <h2 className='text-black font-bold mb-2'>Company</h2>
          <div className='flex items-center'>
            <img
              src="/images/vw.png" // Placeholder image for company
              alt="Company Logo"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Company Name:</strong> Volkswagon
            </p>
          </div>
        </div>

        {/* Owner Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg w-full'>
          <h2 className='text-black font-bold mb-2'>Owner Details</h2>
          <p className='text-black'><strong>Name:</strong> Shivam Gupta</p>
          <p className='text-black'><strong>Phone:</strong> 6232119976</p>
          <p className='text-black'><strong>Address:</strong> Changorabhata</p>
        </div>

        {/* Insurance Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg w-full'>
          <h2 className='text-black font-bold mb-2'>Insurance Details</h2>
          <div className='flex items-center mb-3'>
            <img
              src="/images/Kotak Mahindra Car Insurance.png" // Placeholder image for insurance provider
              alt="Insurance Provider Logo"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Insurance Provider:</strong> Kotak Mahindra
            </p>
          </div>
          <p className='text-black'><strong>Insurance Type:</strong> Comprehensive</p>
          <p className='text-black'><strong>Validity:</strong> 15/03/2024 - 15/03/2027</p>
        </div>
        <button
          className="bg-blue-500 rounded-lg p-2 text-white mt-4 w-full"
          onClick={() => {
            
              router.push("/home", "forward", "replace"); // Changed to push to a new page
            
          }}
        >
          Add Insurance
        </button>
      </div>
    </IonPage>
  );
}
