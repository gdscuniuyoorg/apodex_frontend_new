import React from 'react'
import Button from './Button'
import ChallengeIcon from '@/components/Icons/ChallengeIcon';

export default function Challenge() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between p-5">
        <h3 className="font-semibold text-[33px] leadding-[43.56px] text-[#535458]">
          Challenges
        </h3>
        <Button className=''>   Create a challenge</Button>
      </div>
    </div>
  );
}

