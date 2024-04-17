import React from 'react'
import Button from './Button'
import Challengeimg from './assets/Challengeimg';
import Vector from './assets/vector';

export default function Challenge() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between p-10">
        <h3 className="font-semibold text-[33px] leadding-[43.56px] text-[#535458]">
          Challenges
        </h3>
        <Button className="">
          <Vector></Vector>
          <p>Create a challenge</p>
        </Button>
      </div>
      <div className="flex flex-column items-center justify-center">
        <Challengeimg></Challengeimg>
      </div>
      <div className="text-center m-auto w-[35%]">
        <h4 className="text-[#535458] font-semibold p-2">
          Let’s Kick Things Off with a Challenge
        </h4>
        <p className="text-[#88898C] text-[13px]">
          You have not created any Challenge yet. You can click the button below
          or above to start. You will be able to access information regarding to
          Challenges on this page
        </p>
      </div>
      <div className="flex items-center justify-center p-5">
        <Button className="">
          <Vector></Vector>
          <p>Create a challenge</p>
        </Button>
      </div>
    </div>
  );
}

