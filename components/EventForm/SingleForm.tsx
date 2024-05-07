"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { cn } from "@/utils/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSoloEventSchema, soloEventSchema } from "@/lib/types";
import { LuIndianRupee } from "react-icons/lu";
import FileUpload from "../FileUpload/FileUpload";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { singleEvents } from "@/utils/single";
import { Toaster, toast } from "sonner";
import Image from "next/image";
import qr from "../../public/assets/qr.jpg";

const SingleForm = ({ category }: { category: string }) => {
  const [event, setEvent] = React.useState<ISingleEvent>(
    singleEvents[category as keyof typeof singleEvents][0]
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSoloEventSchema>({
    resolver: zodResolver(soloEventSchema),
    defaultValues: {
      payment: "",
    },
  });

  // Change any here
  const onsubmit = async (data: TSoloEventSchema) => {
    const res = await axios.post(
      `https://avenir24-backend.vercel.app/api/v1/registration/single`,
      data
    );

    if (res.status === 200) {
      // alert("Registered successfully");
      toast("Registered successfully! 🤖");
      reset();
    }
  };
  console.log(event);

  return (
    <div className="max-w-3xl w-full mx-auto h-[100%] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black overflow-y-auto">
      <Toaster/>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register for {category} event
      </h2>
      {/* <div className="flex items-center gap-2 text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <p>Amount to be paid:</p>
        <p className="flex items-center">
          <LuIndianRupee />
          {event.price}{" "}
        </p>
      </div> */}

      <div className="flex justify-between items-center flex-col w-[100%] mt-[10px]">
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse w-full">
          <div className="lg:mt-0 mt-4 text-white">
            <p>
              UPI id: <b>roy01ann.esha@oksbi</b>
            </p>
            <br />
            <p>For any issues contact:</p>
            <p>
              Annesha Roy (<i>Treasurer</i>)
            </p>
            <p>
              Mobile number: <b>7407984987</b>
            </p>
          </div>
          <Image src={qr} alt="QR code" height={150} width={150} />
        </div>
        <div className="notes w-[100%] text-white">
          <div className="flex items-start flex-col mt-[30px] text-center">
            <b>Note:</b>
            <li className="text-[14px]">
              <i>Solo events are free for Phoenix members.</i>
            </li>
            <li className="text-[14px]">
              <i>Upload the screenshot of the successful payment.</i>
            </li>
            <li className="text-[14px]">
              <i>For Phoenix members, upload your Phoenix membership card/payment slip.</i>
            </li>
            <li className="text-[14px]">
              <i>Participant must specify the event name when paying</i>
            </li>
            <li className="text-[14px]">
              <i>The registration fee amount is non-refundable.</i>
            </li>
          </div>
        </div>
      </div>

      <form className="my-8" onSubmit={handleSubmit(onsubmit)}>
        <Select
          name="event"
          register={register}
          defaultValue={
            singleEvents[category as keyof typeof singleEvents][0].name
          }
          onChange={(e) => {
            let eventName = e.target.value;
            singleEvents[category as keyof typeof singleEvents].find(
              (ele) => ele.name === eventName && setEvent(ele)
            );
          }}
          className="text-white text-[15px] w-full h-full rounded-md border-2 border-[#474747] bg-[#1E212B]"
        >
          {singleEvents[category as keyof typeof singleEvents]?.map(
            (ele: ISingleEvent, index: number) => (
              <option key={index} value={ele.name}>
                {ele.name}
              </option>
            )
          )}
        </Select>

        {/* Team Name and Team Lead Name */}
        <div className="flex flex-col lg:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Megatron"
              type="text"
              name="name"
              register={register}
            />
          </LabelInputContainer>
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

        <FileUpload setValue={setValue} />

        <button
          className="text-center flex justify-center items-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" color="white" />
          ) : (
            <span>Register &rarr;</span>
          )}
          {!isSubmitting && <BottomGradient />}
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
