import { IonHeader, IonIcon, IonToolbar } from '@ionic/react'
import { locationOutline, notificationsOutline } from 'ionicons/icons'
import React from 'react'

export default function Header({goBack,title}:{goBack:boolean,title:String}) {
  return (
    <IonHeader translucent={true} className='bg-white'>
        
        <div className='flex flex-row justify-center items-center text-black'>
            <h1>{title}</h1>
        </div>
       
      </IonHeader>
  )
}
