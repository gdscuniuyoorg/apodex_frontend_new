/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation";

const Talent = () => {
    const router = useRouter();

    const dummyData = [
        {
            img: "/dummy1.jpg",
            name: "Celine Margaret",
            role: "UX Designer",
            id: "29484832"
        },
        {
            img: "/dummy2.jpg",
            name: "Maggie Summer",
            role: "UX Designer",
            id: "19294842"
        },
        {
            img: "/dummy3.jpg",
            name: "Annie Jolly",
            role: "UX Designer",
            id: "48459402"
        },
        {
            img: "/dummy1.jpg",
            name: "John Wish",
            role: "UX Designer",
            id: "39440303"
        },
        {
            img: "/dummy2.jpg",
            name: "Collin Mach",
            role: "UX Designer",
            id: "4094040394"
        },
    ]

    return (
        <main className="p-10 w-full flex flex-col">
            <section className="mb-10">
                <div className="flex items-center gap-2">
                    <img src="/filter.png" alt="filter" />
                    <p>Filter</p>
                </div>
            </section>
            <section className="flex justify-between w-full flex-wrap gap-y-8">
                {dummyData.map((dummy, index) => (
                    <div 
                        key={index}
                        onClick={() => router.push(`/dashboard/talents/${dummy.id}`)}
                        className="w-[23.5%] cursor-pointer hover:scale-105 duration-300 transition-all boxShadow flex-col rounded-2xl">
                        <div className="w-full h-[227px]">
                            <img src={dummy.img} alt={dummy.name} className="w-full rounded-t-2xl object-cover h-full" />
                        </div>
                        <div className="flex-col p-4 flex">
                            <h3 className="text-lg font-semibold">{dummy.name}</h3>
                            <p className="text-gray">{dummy.role}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
 
export default Talent;