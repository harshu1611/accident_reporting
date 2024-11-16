import { IonPage } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../components/Header';
import Select from 'react-select';
import { Rings } from 'react-loader-spinner';
import { registeredClaims } from '../data/insProvider';

export default function AIReport() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const options = registeredClaims.map((data: any) => ({
    value: data,
    label: (
      <div className="flex flex-col">
        <div className="flex flex-row items-center w-full">
          <img src={data.carImage} className="h-6 w-6 mr-2" alt="Car Image" />
          <span className="text-black">{data.carModel}</span>
        </div>
        <h1 className="text-black">Claim No: {data.claimNumber}</h1>
        <h1 className="text-black">Policy No: {data.policyNumber}</h1>
      </div>
    ),
  }));

  const generateReport = () => {
    if (!selectedClaim) {
      alert('Please select a claim to generate the report.');
      return;
    }

    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      // Generate dummy AI report data after loading
      const dummyReport = {
        claimNumber: selectedClaim.claimNumber,
        policyNumber: selectedClaim.policyNumber,
        carModel: selectedClaim.carModel,
        accidentAnalysis: "Minor damage detected to front bumper and left door.",
        costEstimate: "Estimated repair cost: ₹90,000.",
        suggestions: "Consider visiting an authorized repair center in your area for a detailed inspection.",
      };
      setReport(dummyReport);
      setLoading(false);
    }, 2000);
  };

  return (
    <IonPage className="bg-white h-xcreen">
      <Header goBack={true} title={"AI Report"} />
      <div className="p-5 text-black font-faculty flex flex-col items-center space-y-6 h-full">
        <h2 className="text-2xl font-bold">Generate AI Claim Report</h2>

        {/* Claims Selection */}
        <div className="w-full max-w-lg">
          <Select
            options={options}
            className="basic-single w-full"
            classNamePrefix="select"
            name="registered-claims"
            placeholder="Select Registered Claim"
            onChange={(option: any) => setSelectedClaim(option?.value)}
          />
        </div>

        {/* Generate Report Button */}
        <button
          onClick={generateReport}
          className="bg-blue-500 rounded-lg p-3 text-white w-full max-w-lg"
        >
          Generate AI Report
        </button>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <Rings height="80" width="80" color="blue" ariaLabel="loading" />
          </div>
        )}

        {/* Display AI Report */}
        {report && !loading && (
          <div className="w-full max-w-lg p-6 bg-gray-100 rounded-lg mt-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">AI Report Summary</h3>
            <p><strong>Claim Number:</strong> {report.claimNumber}</p>
            <p><strong>Policy Number:</strong> {report.policyNumber}</p>
            <p><strong>Car Model:</strong> {report.carModel}</p>
            <p><strong>Accident Analysis:</strong> {report.accidentAnalysis}</p>
            <p><strong>Cost Estimate:</strong> {report.costEstimate}</p>
            <p><strong>Suggestions:</strong> {report.suggestions}</p>
          </div>
        )}
      </div>
    </IonPage>
  );
}
