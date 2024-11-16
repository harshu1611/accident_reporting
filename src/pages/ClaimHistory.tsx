import React from 'react';
import Header from '../components/Header';
import { IonPage } from '@ionic/react';

export default function ClaimHistory() {
  // Sample data for claims
  const claims = [
    {
      id: 1,
      policyNumber: 'PN123456',
      date: '2023-11-01',
      status: 'Pending',
      amount: 'Not verified',
      description: 'Accident on Ring Road involving minor damages to rear bumper.',
    },
    {
      id: 2,
      policyNumber: 'PN654321',
      date: '2023-10-15',
      status: 'Approved',
      amount: '₹25,000',
      description: 'Collision with a two-wheeler resulting in damage to the front door.',
    },
    {
      id: 3,
      policyNumber: 'PN789456',
      date: '2023-09-05',
      status: 'Rejected',
      amount: '₹12,000',
      description: 'Claim rejected due to missing documentation for windshield damage.',
    },
  ];

  const handleViewDetails = (claimId: number) => {
    // Here you can implement navigation or modal to view detailed information
    alert(`Viewing details for claim ID: ${claimId}`);
  };

  return (
    <IonPage className='bg-white h-screen overflow-auto'>
      <Header goBack={true} title={"Claim History"} />
      <div className='p-4 font-faculty flex flex-col items-center'>
      <img src="/logo.png" className=" h-32 w-32 " alt="App Logo"></img>

        <h1 className='text-xl font-bold mb-4'>Your Claim History</h1>

        {claims.length > 0 ? (
          claims.map((claim) => (
            <div
              key={claim.id}
              className='bg-gray-100 p-4 mb-4 rounded-lg shadow-md transition-all hover:bg-gray-200 text-black'
            >
              <h2 className='font-bold text-lg'>Policy Number: {claim.policyNumber}</h2>
              <p className='text-sm text-gray-700 mb-2'>
                <strong>Claim Date:</strong> {claim.date}
              </p>
              <p className='text-sm text-gray-700 mb-2'>
                <strong>Status:</strong> 
                <span
                  className={`ml-2 px-2 py-1 rounded ${
                    claim.status === 'Approved'
                      ? 'bg-green-500 text-white'
                      : claim.status === 'Pending'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {claim.status}
                </span>
              </p>
              <p className='text-sm text-gray-700 mb-2'>
                <strong>Claim Amount:</strong> {claim.amount}
              </p>
              <p className='text-sm text-gray-700'>
                <strong>Description:</strong> {claim.description}
              </p>
              <button
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'
                onClick={() => handleViewDetails(claim.id)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No claims have been made yet.</p>
        )}
      </div>
    </IonPage>
  );
}
