"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import ChallengeIcon from "@/components/Icons/ChallengeIcon";
import Challengeimg from "../../../components/Icons/Challengeimg";
import Vector from "../../../components/Icons/vector";
// import Form from './form/page'
import "../challenges/Challenges.css";

export default function Challenge() {
  const router = useRouter();

  const handleNext = () => {
    router.push("challenges/form");
  };

  return (
    <div>
      <div className="wrapper flex flex-row items-center justify-between p-10">
        <h3 className="first font-semibold text-[33px] leadding-[43.56px] text-[#535458]">
          Challenges
        </h3>
        <Button className="" onClick={handleNext}>
          <Vector></Vector>
          <p>Create a challenge</p>
        </Button>
      </div>
      <div className="flex flex-column items-center justify-center">
        <Challengeimg className="ill"></Challengeimg>
      </div>
      <div className="empty text-center m-auto w-[35%]">
        <h4 className="text-[#535458] font-semibold p-2">
          Let’s Kick Things Off with a Challenge
        </h4>
        <p className="main text-[#88898C] text-[13px]">
          You have not created any Challenge yet. You can click the button below
          or above to start. You will be able to access information regarding to
          Challenges on this page
        </p>
      </div>
      <div className="flex items-center justify-center p-5">
        <Button className="" onClick={handleNext}>
          <Vector></Vector>
          <p>Create a challenge</p>
        </Button>
      </div>
    </div>
  );
}

// Challenge.tsx
// import Button from './Button';

// Challenge.tsx

// import React, { useEffect } from "react";
// import ChallengeIcon from "@/components/Icons/ChallengeIcon";
// import Challengeimg from "@/components/Icons/Challengeimg";
// import Vector from "@/components/Icons/vector";
// import "../challenges/Challenges.css";
// import dynamic from "next/dynamic";

// const DynamicButton = dynamic(() => import("./Button"), { ssr: false }); // Dynamically import Button component
// const DynamicChallengeForm = dynamic(() => import("./form/page"), {
//   ssr: false,
// }); // Dynamically import ChallengeForm component

// export default function Challenge() {
//   useEffect(() => {
//     // This effect runs only on the client-side
//     const handleCreateChallenge = () => {
//       setShowChallengeForm(true);
//     };

//     return () => {
//       // Clean up any resources if needed
//     };
//   }, []); // Run this effect only once on component mount

//   const [showChallengeForm, setShowChallengeForm] = React.useState(false);

//   return (
//     <div>
//       <div className="wrapper flex flex-row items-center justify-between p-10">
//         <h3 className="first font-semibold text-[33px] leadding-[43.56px] text-[#535458]">
//           Challenges
//         </h3>
//         {!showChallengeForm && (
//           <DynamicButton
//             onClick={() => setShowChallengeForm(true)}
//             className=""
//           >
//             <Vector />
//             <p>Create a challenge</p>
//           </DynamicButton>
//         )}
//       </div>
//       <div className="flex flex-column items-center justify-center">
//         {!showChallengeForm ? (
//           <Challengeimg className="ill" />
//         ) : (
//           <DynamicChallengeForm />
//         )}
//       </div>
//       {!showChallengeForm && (
//         <div className="empty text-center m-auto w-[35%]">
//           <h4 className="text-[#535458] font-semibold p-2">
//             Let’s Kick Things Off with a Challenge
//           </h4>
//           <p className="main text-[#88898C] text-[13px]">
//             You have not created any Challenge yet. You can click the button
//             below or above to start. You will be able to access information
//             regarding to Challenges on this page
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
