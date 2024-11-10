import { IonPage } from '@ionic/react';
import React from 'react';
import { useIonRouter } from '@ionic/react';
import Header from '../components/Header';

export default function GetInsurance() {
  const router = useIonRouter();

  return (
    <IonPage className='bg-white'>
      <Header goBack={true} title={"Insurance Details"}/>
      <div className='flex flex-col font-faculty overflow-scroll'>
        {/* Title */}
        <h1 className='text-black text-center text-xl underline'>Insurance Details</h1>

        {/* Policy Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg'>
          <h2 className='text-black font-bold mb-2'>Policy Details</h2>
          <p className='text-black'>
            <strong>Policy Number:</strong> Some Value
          </p>
        </div>

        {/* Car Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg'>
          <h2 className='text-black font-bold mb-2'>Car Details</h2>
          <div className='flex items-center flex-col'>
            <img
              src="https://via.placeholder.com/100" // Placeholder image for car model
              alt="Car Model"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Car Model:</strong> Car Name
            </p>
            <p className='text-black'>
              <strong>Car Make:</strong> Car Make Date
            </p>
            <p className='text-black'>
              <strong>RC No.:</strong> Car R/C
            </p>
          </div>
        </div>

        {/* Company Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg'>
          <h2 className='text-black font-bold mb-2'>Company</h2>
          <div className='flex items-center'>
            <img
              src="https://via.placeholder.com/100" // Placeholder image for company
              alt="Company Logo"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Company Name:</strong> Insurance Company
            </p>
          </div>
        </div>

        {/* Owner Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg'>
          <h2 className='text-black font-bold mb-2'>Owner Details</h2>
          <p className='text-black'><strong>Name:</strong> John Doe</p>
          <p className='text-black'><strong>Phone:</strong> +1 234 567 890</p>
          <p className='text-black'><strong>Address:</strong> 1234 Main St, City, Country</p>
        </div>

        {/* Insurance Details Section */}
        <div className='mt-5 p-3 border border-gray-300 rounded-lg'>
          <h2 className='text-black font-bold mb-2'>Insurance Details</h2>
          <div className='flex items-center mb-3'>
            <img
              src="/images/Kotak Mahindra Car Insurance.png" // Placeholder image for insurance provider
              alt="Insurance Provider Logo"
              className='h-20 w-20 mr-4 rounded-md'
            />
            <p className='text-black'>
              <strong>Insurance Provider:</strong> Provider Name
            </p>
          </div>
          <p className='text-black'><strong>Insurance Type:</strong> Comprehensive</p>
          <p className='text-black'><strong>Validity:</strong> 01/01/2024 - 31/12/2024</p>
        </div>
      </div>
    </IonPage>
  );
}
