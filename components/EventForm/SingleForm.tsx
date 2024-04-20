"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { cn } from "@/utils/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSoloEventSchema, soloEventSchema } from "@/lib/types";

const SingleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSoloEventSchema>({
    resolver: zodResolver(soloEventSchema),
  });
  const onsubmit = async (data: TSoloEventSchema) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  const options = [
    "Sorcerous Solo (₹70)",
    "Western Mystique (₹70)",
    "Mayhem Showdown (₹60)",
    "Mridangam (₹70)",
    "Rhythmic Wizardry (₹70)",
    "Artistic Odyssey (₹50)",
    "SpellBound Sagas (₹50)",
    "Enchanted Legends (₹50)",
  ];

  return (
    <div className="max-w-md w-full text-white mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <p className="lg:text-[25px] text-[19px] lg:mb-[50px] mb-[30px] font-bold">
        Registration form
      </p>

      <form className="my-8" onSubmit={handleSubmit(onsubmit)}>
        <Select
          name="event"
          register={register}
          //   id="dropdown"
          //   value={selectedValue}
          //   onChange={handleEvent}
          className="text-white text-[15px] lg:w-full w-[250px] h-[32px] rounded-md border border-2 border-[#474747] bg-[#1E212B]"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex space-y-2 md:space-y-0 md:space-x-2 mt-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler Durden"
                type="text"
                register={register}
              />
              {errors.name && (
                <p className="text-red-500">{`${errors.name.message}`}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">College Name</Label>
              <Input
                id="collegename"
                name="collegename"
                placeholder="Fight Club"
                type="text"
                register={register}
              />
              {errors.collegeName && (
                <p className="text-red-500">{`${errors.collegeName.message}`}</p>
              )}
            </LabelInputContainer>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex space-y-2 md:space-y-0 md:space-x-2 mt-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Whatsapp number</Label>
              <Input
                id="whatsappnumber"
                name="whatsappnumber"
                placeholder="98*** ***89"
                type="text"
                register={register}
              />
              {errors.whatsappNumber && (
                <p className="text-red-500">{`${errors.whatsappNumber.message}`}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Alternate number</Label>
              <Input
                id="atlernaenumber"
                name="alternatenumber"
                placeholder="98*** ***89"
                type="text"
                register={register}
              />
              {errors.alternateNumber && (
                <p className="text-red-500">{`${errors.alternateNumber.message}`}</p>
              )}
            </LabelInputContainer>
          </div>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            register={register}
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
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

export default SingleForm;
