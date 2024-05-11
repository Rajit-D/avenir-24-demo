"use client";
import React, { useState } from "react";
import { Meteors } from "../ui/meteors";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import { cn } from "@/utils/cn";
const Teams = ({ members }: { members: Member[] }) => {
  const teamSet = ["Core Team", "Wing Lead", "Dev Team", "All"];
  const [filterMembers, setFilterMember] = useState<Member[]>(members);
  const [team, setTeam] = useState<string>("All");
  const handleFilter = (steam: string) => {
    setTeam(steam);
    if (steam === "All") {
      setFilterMember(members);
    } else {
      const filteredMembers = members.filter(
        (member: Member, index: number) => {
          return member.category === steam;
        }
      );
      setFilterMember(filteredMembers);
    }
  };
  return (
    <main className="md:pt-[99.41px]">
      <div className="bg-slate-500 overflow-hidden bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px] text-white font-strike-light flex max-w-fit mx-auto rounded-lg">
        {teamSet.map((steam: string, index: number) => (
          <button
            key={index}
            className={cn(
              "w-44 p-2 px-4",
              steam === team &&
                "bg-white bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]"
            )}
            onClick={() => handleFilter(steam)}
          >
            {teamSet[index]}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 items-center pb-8 lg:grid-cols-3 py-10 px-5 md:px-12 lg:px-36 grid-cols-1 md:gap-20 lg:gap-12 gap-4 w-full">
        {filterMembers.map((member, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] overflow-y-scroll p-4 sm:p-1 bg-[#1B1B1E]"
          >
            <div className="flex flex-row justify-around  p-2 mx-auto text-center text-white rounded-[22px]">
              <div className="h-min w-fit overflow-hidden rounded-lg">
                <img
                  className="h-[150px] w-[160px] rounded-lg hover:scale-125 blur-[0.5px] hover:blur-none ease-in-out transition-all object-cover object-center duration-500 cursor-pointer"
                  src={member.avatarURL}
                  alt="avatar"
                />
              </div>

              <div className="flex flex-col justify-center items-start ml-5 w-full">
                <h3 className="text-2xl font-strike text-left">
                  {member.name}
                </h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {member.designation}
                </p>
                <div className="mt-3 flex justify-around text-[25px] text-white">
                  {member.instagramURL !== "NA" && (
                    <Link href={member.instagramURL}>
                      <FaInstagram
                        size={"1.8rem"}
                        className=" bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-500 rounded-md"
                      />
                    </Link>
                  )}
                  {member.linkedinURL !== "NA" && (
                    <Link href={member.linkedinURL}>
                      <FaLinkedinIn
                        size={"1.8rem"}
                        className="ml-3 text-blue-500"
                      />
                    </Link>
                  )}
                  {member.facebookURL !== "NA" && (
                    <Link href={member.facebookURL}>
                      <FaFacebook
                        size={"1.8rem"}
                        className="ml-3 text-blue-500"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </main>
  );
};

export default Teams;
