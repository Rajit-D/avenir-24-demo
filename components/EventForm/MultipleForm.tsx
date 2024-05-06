"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { cn } from "@/utils/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TMultiEventSchema, multiEventSchema } from "@/lib/types";
import { multipleEvents } from "@/utils/multi";
import { LuIndianRupee, LuPlusCircle, LuXCircle } from "react-icons/lu";
import FileUpload from "../FileUpload/FileUpload";
import axios from "axios";
import { Loader2 } from "lucide-react";

const MultipleForm = ({ category }: { category: string }) => {
  const [event, setEvent] = React.useState<IMultiEvent>(
    multipleEvents[category as keyof typeof multipleEvents][0]
  );
  const [members, setMembers] = React.useState(
    [] as { name: string; info: string }[]
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TMultiEventSchema>({
    resolver: zodResolver(multiEventSchema),
    defaultValues: {
      payment: "",
    },
  });

  // Change any here
  const onsubmit = async (data: TMultiEventSchema) => {
    delete data.memberName;
    delete data.memberInfo;

    const toUpload = {
      ...data,
      members,
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/registration/multi`,
      toUpload
    );

    if (res.status === 200) {
      alert("Registered successfully");
      reset();
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black h-[100%] overflow-y-auto">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register for {category} event
      </h2>
      <div className="flex items-center gap-2 text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <p>Amount to be paid:</p>
        <p className="flex items-center">
          <LuIndianRupee />
          {event.price}{" "}
        </p>
      </div>

      <form className="my-8" onSubmit={handleSubmit(onsubmit)}>
        <Select
          name="event"
          register={register}
          defaultValue={
            multipleEvents[category as keyof typeof multipleEvents][0].name
          }
          onChange={(e) => {
            let eventName = e.target.value;
            multipleEvents[category as keyof typeof multipleEvents].find(
              (ele) => ele.name === eventName && setEvent(ele)
            );
          }}
          className="text-white text-[15px] w-full h-[32px] rounded-md border-2 border-[#474747] bg-[#1E212B]"
        >
          {multipleEvents[category as keyof typeof multipleEvents]?.map(
            (ele: IMultiEvent, index: number) => (
              <option key={index} value={ele.name}>
                {ele.name}
              </option>
            )
          )}
        </Select>

        {/* Team Name and Team Lead Name */}
        <div className="flex flex-col lg:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 w-full">
            <LabelInputContainer>
              <Label htmlFor="teamName">Team Name</Label>
              <Input
                id="teamName"
                placeholder="Megatron"
                type="text"
                name="teamName"
                register={register}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="teamLeaderName">Team Lead Name</Label>
              <Input
                id="teamLeaderName"
                placeholder="Megatron's Dad"
                type="text"
                name="teamLeaderName"
                register={register}
              />
            </LabelInputContainer>
          </div>
        </div>

        {/* College */}
        <LabelInputContainer>
          <Label htmlFor="collegeName">College Name</Label>
          <Input
            id="collegeName"
            placeholder="Netaji Subhash Engineering College"
            type="text"
            name="collegeName"
            register={register}
          />
        </LabelInputContainer>

        {/* Contact Number */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 w-full">
            <LabelInputContainer>
              <Label htmlFor="whatsappNumber">Whatsapp number</Label>
              <Input
                id="whatsappNumber"
                placeholder="98*** ***89"
                type="text"
                name="whatsappNumber"
                register={register}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="alternateNumber">Alternate number</Label>
              <Input
                id="alternateNumber"
                placeholder="98*** ***89"
                type="text"
                name="alternateNumber"
                register={register}
              />
            </LabelInputContainer>
          </div>
        </div>

        {/* Email ID of Team Lead */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Team Lead's Email Address"
            type="email"
            name="email"
            register={register}
          />
        </LabelInputContainer>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 w-full">
            <LabelInputContainer>
              <Label htmlFor="memberName">Member Name</Label>
              <Input
                id="memberName"
                placeholder="Optimus Prime"
                type="text"
                name="memberName"
                register={register}
              />
            </LabelInputContainer>
            <div className="flex items-center gap-2 w-full">
              <LabelInputContainer>
                <Label htmlFor="memberInfo">
                  Team Member{"'"}s{" "}
                  {category === "Esports" && event.name === "BGMI"
                    ? "Game ID"
                    : "Email"}
                </Label>
                <Input
                  id="memberInfo"
                  placeholder="After adding this, press + icon 👉"
                  type="email"
                  name="memberInfo"
                  register={register}
                />
              </LabelInputContainer>
              <LuPlusCircle
                className="text-white cursor-pointer mt-5"
                size={32}
                onClick={() => {
                  if (event.max === members.length) {
                    alert("Max members reached");
                    return;
                  }

                  if (watch("memberName") === "" || watch("memberInfo") === "")
                    return;

                  const memberName = watch("memberName")!;
                  const memberInfo = watch("memberInfo")!;

                  setMembers([
                    ...members,
                    { name: memberName, info: memberInfo },
                  ]);

                  setValue("memberName", "");
                  setValue("memberInfo", "");
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-5 my-5 w-full">
          {members?.map((ele, index) => (
            <div
              key={index}
              className="text-white bg-[#27272A] w-fit px-5 py-2 rounded-md relative"
            >
              <span>
                {ele.name}, {ele.info}
              </span>
              <LuXCircle
                color="red"
                className="absolute -top-2 -right-2 cursor-pointer"
                size={18}
                onClick={() => {
                  setMembers((prev) => prev.filter((_, i) => i !== index));
                }}
              />
            </div>
          ))}
        </div>

        <FileUpload setValue={setValue} />

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={
            members.length < event.min ||
            members.length > event.max ||
            isSubmitting
          }
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" color="white" />
          ) : (
            <span>Register &rarr;</span>
          )}
          {members.length >= event.min &&
            members.length <= event.max &&
            !isSubmitting && <BottomGradient />}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default MultipleForm;
