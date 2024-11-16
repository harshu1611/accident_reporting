import React, { useState } from 'react';

export default function CarComponent() {
  const parts = ["Roof", "Hood", "Door","Headlights","Bumper","Wheel","Window","Trunk","Taillight"];
  const [selected, setSelected] = useState<string[]>([]);

  const handlePartClick = (part: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(part)) {
        // If already selected, remove from selection
        return prevSelected.filter(item => item !== part);
      } else {
        // Otherwise, add to selection
        return [...prevSelected, part];
      }
    });
  };

  return (
    <div className='flex flex-col items-center font-faculty space-y-2'>
      <h1 className='text-black'>Select Damaged Parts</h1>
    <div className='grid grid-cols-3 gap-2'>
      {parts.map((part) => {
        const isSelected = selected.includes(part);
        return (
          <div
            key={part}
            className={`p-2 text-white font-faculty text-center rounded-lg cursor-pointer ${isSelected ? 'bg-red-500' : 'bg-gray-400'}`}
            onClick={() => handlePartClick(part)}
          >
            {part}
          </div>
        );
      })}
    </div>
    </div>
  );
}
