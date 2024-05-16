/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { getAllTalents } from "@/redux/features/talentSlice";
import { useEffect } from "react";
import { User } from "@/redux/features/authSlice";

const Talent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTalents());
  }, [dispatch]);

  const { data: allTalents, status } = useAppSelector((state) => state.talent);
  const { user } = useAppSelector((state) => state.auth);

  return (
    <main className="lg:px-10 p-10 px-0 container w-full flex flex-col">
      <section className="mb-10">
        <div className="flex items-center gap-2">
          <img src="/filter.png" alt="filter" />
          <p>Filter</p>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row justify-start w-full flex-wrap gap-y-8 gap-x-6">
        {allTalents.users
          ?.filter(
            (el: User) => el.name && el.displayPhoto && el.id !== user?.id
          )
          .map((user: User) => (
            <div
              key={user.id}
              onClick={() => router.push(`/dashboard/talents/${user.id}`)}
              className="lg:w-[23.5%] w-full cursor-pointer hover:scale-105 bg-white duration-300 transition-all boxShadow flex-col rounded-2xl"
            >
              <div className="w-full h-[227px]">
                <img
                  src={user.displayPhoto}
                  alt={user.name}
                  className="w-full rounded-t-2xl object-cover h-full"
                />
              </div>
              <div className="flex-col p-4 flex">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray">{user.role || "Techie"}</p>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Talent;
