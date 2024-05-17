"use client";
import { useAppSelector } from "@/common/hooks";
import dynamic from "next/dynamic";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  const hobbies = user?.hobbies;
  const skills = user?.skills;
  const interests = user?.techInterests;

  return (
    <div className="container lg:px-10 p-10 px-0">
      <section className="flex-col w-full text-[#535458]">
        <div className="w-full gap-10 min-h-[227px] flex lg:flex-row flex-col">
          <div className="h-[227px] w-[250px] border border-lightGray">
            <img
              src={user?.displayPhoto || ""}
              alt="dummy1"
              style={{ backgroundPosition: "center center" }}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full flex-col gap-2 flex">
            <div className="flex lg:flex-row flex-col between">
              <p className="text-2xl text-black font-semibold">
                {user?.firstName} {user?.lastName}
              </p>
              <div className="center gap-4">
                <a href={user?.linkedInUrl} target="_blank">
                  <img src="/linkedin.png" alt="linkedin Logo" />
                </a>
                <a href={user?.twitterUrl} target="_blank">
                  <img src="/twitter.png" alt="twitter Logo" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="center ml-6 gap-2 p-2 border border-lightGray"
                >
                  <img src="/share.png" alt="share Logo" />
                  <p>Share</p>
                </a>
              </div>
            </div>
            <p>
              <span className="font-semibold">{user?.currentRole}</span> at{" "}
              <span className="font-semibold">{user?.company}</span>
            </p>
            <div className="flex gap-2">
              <img
                src="/location.png"
                alt="location logo"
                className="object-contain"
              />
              <p>{user?.location || "undefined"}</p>
            </div>
            <p className="mt-6">Bio</p>
            <div className="flex lg:flex-row flex-col between">
              <p className="lg:w-[70%]">{user?.bio}</p>
              <a
                href={user?.portfolioUrl}
                target="_blank"
                className="center ml-6 gap-2 p-3 border border-lightGray"
              >
                <img src="/view.png" alt="view Logo" />
                <p>View Portfolio</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[1px] border-[#C2C2C44D] my-8" />
        <div className="w-full flex lg:flex-row flex-col justify-between gap-10">
          <section className="flex flex-col gap-4">
            <p>Education</p>
            <div className="flex flex-col gap-1">
              <p>University of Uyo</p>
              <p className="text-black">
                Mechanical Engineering - <span className="italic"> BSc</span>
              </p>
              <p className="italic text-gray">Sept 2018 - Present </p>
            </div>

            <div className="flex flex-col gap-1">
              <p>Topfaith International Secondary School</p>
              <p className="text-black">
                Engineering Major - <span className="italic"> WASSCE</span>
              </p>
              <p className="italic text-gray">Sept 2016 - June 2018</p>
            </div>

            <p className="mt-6">Languages</p>
            <div className="flex flex-col gap-1">
              <p className="text-black">
                English Language <span className="italic"> (preferred)</span>
              </p>
              <p className="italic text-gray">B2</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-black">Igbo Language</p>
              <p className="italic text-gray">C2</p>
            </div>

            <p className="mt-6">Hobbies</p>
            <div className="flex gap-3 flex-wrap">
              {hobbies && hobbies.length > 0 ? (
                hobbies.map((hobby, index) => (
                  <div key={index} className="bg-[#E0E0E1] p-2">
                    {hobby}
                  </div>
                ))
              ) : (
                <p>No hobbies listed.</p>
              )}
            </div>
          </section>
          <section className="w-[55%] flex flex-col gap-4">
            <div className="between">
              <p>Work Experience</p>
              <a href="#" target="_blank" className="center ml-6 gap-2">
                <img src="/download.png" alt="download Logo" />
                <p>Resume</p>
              </a>
            </div>

            <div className="flex flex-col gap-1 p-3 border-[#C2C2C44D] border">
              <p>NewCastle Jobs</p>
              <p className="text-black">Principal React Developer</p>
              <p className="italic text-gray">Dec 2018 - Present</p>
            </div>
            <div className="flex flex-col gap-1 p-3 border-[#C2C2C44D] border">
              <p>Shopify</p>
              <p className="text-black">Staff React Developer</p>
              <p className="italic text-gray">Aug 2016 - Nov 2018</p>
            </div>
            <p className="mt-6">Skills & Tools</p>
            <div className="flex gap-3 flex-wrap w-full">
              {skills && skills.length > 0 ? (
                skills.map((skill, index) => (
                  <div key={index} className="bg-[#E0E0E1] p-2">
                    {skill}
                  </div>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
            </div>

            <p className="mt-6">Tech Interests</p>
            <div className="flex gap-3 flex-wrap w-full">
              {interests && interests.length > 0 ? (
                interests.map((interest, index) => (
                  <div key={index} className="bg-[#E0E0E1] p-2">
                    {interest}
                  </div>
                ))
              ) : (
                <p>No tech interests listed.</p>
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

// export default Profiles
export default dynamic(() => Promise.resolve(Profile), { ssr: false });
