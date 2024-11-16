import { IonPage, useIonRouter } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Rings } from 'react-loader-spinner'

export default function SOS6() {
    const router=useIonRouter()
    const [loading,setLoading]=useState<boolean>(true)
    useEffect(() => {
      setTimeout(()=>{
        setLoading(false)
      },2500)
    }, [])
    
  return (
    <IonPage className='bg-white h-screen'>
        <Header goBack={false} title={"Claim Submitted"}/>
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
            <div className='flex flex-col justify-center items-center h-full text-black font-faculty p-3'>
        <img src="/logo.png" className="absolute bottom-0 h-32 w-32 " alt="App Logo"></img>

            <img src='/images/green_tick.png' className='h-36 w-36'></img>
            <h1 className='font-bold'>Claim Submitted Succesfully</h1>
            <h1 className='font-bold'>Check Claim Status on <span className='text-blue-500 underline'>Claim History</span></h1>
            <button
          className="bg-blue-500 rounded-lg p-2 text-white mt-4 w-full"
            onClick={()=>{router.push("/home","forward","replace")}}
        >
          Go To Home
        </button>
        </div>
        }
        
    </IonPage>
  )
}
