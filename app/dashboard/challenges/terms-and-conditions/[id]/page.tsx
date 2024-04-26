"use client";
import React from "react";
import { useParams } from "next/navigation";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const TermsAndConditions = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="">
      {/* <div className="bg-[#D9D9D9] w-full h-40 sticky top-0"></div> */}
      <div className="flex justify-between container py-5">
        <div className="">
          <h2 className="font-medium text-[16px] text-[#535458]">Details</h2>
          <div className="flex flex-col p-3 text-[13px] text-[#88898C]">
            <a href="#Details" className="pt-2">
              Details
            </a>
            <a href="#Prizes" className="pt-2">
              Prizes
            </a>
            <a href="#Rules" className="pt-2">
              Rules
            </a>
          </div>
        </div>
        <div className="w-[65%] m-auto">
          <div>
            <h2
              className="text-[33px] font-semibold text-[#535458] text-center"
              id="Details"
            >
              Tech Ignite Hackathon 2024
            </h2>
            <p className="text-[16px] text-[#88898C] pt-5">
              {`Join us for an exhilarating weekend of innovation and
              collaboration at our tech-themed hackathon! Whether you're a
              seasoned coder, designer, or a tech enthusiast eager to learn,
              this event is perfect for you. Dive into a whirlwind of creativity
              as teams brainstorm, code, and prototype solutions to real-world
              challenges. With expert mentors, cutting-edge technologies, and
              fantastic prizes up for grabs, it's an opportunity to showcase
              your skills, network with fellow techies, and bring your boldest
              ideas to life. Let's hack the future together!`}
            </p>
          </div>
          {/* Prizes */}
          <div>
            <h2
              className="text-[#88898C] font-semibold text-[23px] text-center py-5"
              id="Prizes"
            >
              Prizes
            </h2>
            <p className="text-[#88898C] text-[16px]">
              {` As a token of appreciation, we will be giving swags to everyone
              who participates in the Hackathon. We will also recognize all the
              participating teams in the event. The Winning team, the first
              runner up and the second runner up will receive other prizes which
              are as follows:`}
            </p>
            <div className="text-[#535458] text-[16px] font-medium text-center pt-5">
              <p className="pt-2 ">Winning Team - 10k, GDSC cup, Data</p>
              <p className="pt-2 ">First Runner up - 6k, Data</p>
              <p className="pt-2">Second Runner up - 3k</p>
            </div>
          </div>

          {/* Rules */}

          <div>
            <h2 className="text-[#88898C] font-semibold text-[23px] text-center py-5">
              Rules
            </h2>
            <p className="text-[#88898C] text-[16px]">
              {`Eligibility: Participation in the hackathon is open to individuals
              who meet the specified eligibility criteria, including age
              restrictions and any other requirements outlined by the
              organizers. Code of Conduct: Participants are expected to conduct
              themselves in a respectful and professional manner at all times.
              Harassment, discrimination, or any form of inappropriate behavior
              will not be tolerated and may result in immediate disqualification
              from the event. Team Formation: Participants may form teams of up
              to [number] members. Teams may be formed prior to the event or
              during the team formation period specified by the organizers.
              Participants may not join or switch teams after the designated
              deadline. Original Work: All code, designs, and solutions
              developed during the hackathon must be original and created solely
              by the participating team. The use of pre-existing code or
              solutions not developed during the event is strictly prohibited.
              Intellectual Property: Participants retain ownership of the
              intellectual property rights to their submissions. By
              participating in the hackathon, participants grant the organizers
              the right to use, display, and promote their submissions for
              non-commercial purposes. Judging Criteria: Submissions will be
              judged based on criteria such as innovation, functionality,
              design, and impact. The judging criteria will be communicated to
              participants prior to the start of the hackathon. Submission
              Deadline: Submissions must be completed and submitted by the
              deadline specified by the organizers. Late submissions will not be
              accepted or considered for judging. Technology and Tools:
              Participants are free to use any programming languages,
              frameworks, libraries, and tools of their choice, provided they
              comply with any restrictions or guidelines specified by the
              organizers. Legal Compliance: Participants must comply with all
              applicable laws, regulations, and policies, including those
              related to data privacy, intellectual property, and export
              controls. Disqualification: Participants may be disqualified from
              the hackathon for violations of the terms and conditions, code of
              conduct, or any other rules specified by the organizers.
            `}
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-5 m-auto py-5">
            <Button className="w-1/2 flex items-center justify-center  border-none bg-[#C2C2C433]  text-[#6D6E72]">
              Decline
            </Button>

            <Link href={"/dashboard/challenges/team-form"} className="w-[100%]">
              <Button className="w-1/2 flex items-center justify-center text-white">
                Agree
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
