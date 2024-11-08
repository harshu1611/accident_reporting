import { IonPage } from '@ionic/react';
import Select from 'react-select';
import { InsuranceProviders } from '../data/insProvider';
import logo from "../images/HDFC Ergo.png";
import { Link } from 'react-router-dom';
import { useIonRouter } from '@ionic/react';
import { useState } from 'react';
import { Rings } from 'react-loader-spinner'

const Tab2: React.FC = () => {

  const [loading,setLoading]=useState<boolean>(false)
  const fetchInsurance=()=>{
    setLoading(true)
      setTimeout(()=>{  
         router.push("/getInsurance",'forward','push')
         setLoading(false)
      },2000)
  }
  const router=useIonRouter()
  // Prepare options with image and label
  const options = InsuranceProviders.map((data: any) => ({
    value: data.name,
    label: (
      <div className='flex flex-row items-center'>
        <img src={data.logo} className='h-6 w-6 mr-2' />
        <span className='text-black'>{data.name}</span>
      </div>
    ),
  }));

  return (
    <IonPage>
      <div className='flex bg-white h-screen flex-col p-3 font-faculty space-y-3'>
        {loading?
          <div className='justify-center items-center flex h-screen'>
            
        <Rings
        height="80"
        width="80"
        color="blue"
        ariaLabel="loading"
        
      />
          </div>
       :
      <>
       <h1 className='text-black text-xl font-bold'>Register Your Existing Insurance</h1>
        <Select
          options={options}
          className="basic-single"
          classNamePrefix="select"
          name="insurance-provider"
          placeholder="Select Insurance Provider"
        />
        <input type="text" placeholder='Policy Number' className='bg-white p-2 text-black border-2 border-gray-400 rounded-md'/>
        
        <button className='bg-blue-500 rounded-lg p-3 w-full' onClick={()=>{
          fetchInsurance()
        }}>
          Get Insurance Details
        </button>
        
       
        <h1 className='text-blue-500 underline text-sm text-center'>But New Insurance</h1>
      </>
      }
       
      </div>
    </IonPage>
  );
};

export default Tab2;
