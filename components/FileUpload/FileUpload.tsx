import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { ImagePlusIcon, Loader2Icon, Sparkles } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

const FileUpload = ({ setValue }: { setValue: any }) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [dragOver, setDragOver] = useState<boolean>(false);

  const uploadFile = async (e: File) => {
    if (e) {
      setUploading(true);

      const filename = Date.now() + "_" + e.name;
      const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
        .upload(`paymentSS/${filename}`, e);
      if (error) {
        alert("Something went wrong! Please contact the admins");
        return;
      }

      if (data) {
        const { data: image } = supabase.storage
          .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
          .getPublicUrl(data?.path!);
        setImageUrl(image.publicUrl);
        setValue("payment", image.publicUrl);
      }

      setUploading(false);
    }
  };

  return (
    <div>
      <Dropzone
        onDrop={(acceptedFiles) => {
          if (acceptedFiles?.length) {
            uploadFile(acceptedFiles[0]);
          }
        }}
        onDragEnter={() => setDragOver(true)}
        onDragLeave={() => setDragOver(false)}
        onDropAccepted={() => setDragOver(false)}
        onDropRejected={() => setDragOver(false)}
      >
        {({ getRootProps, getInputProps }) => (
          <section
            className={`${
              dragOver && "bg-zinc-100 dark:bg-zinc-800"
            } border-dashed rounded-xl border-[2px] h-44 dark:border-zinc-800 border-zinc-200 flex justify-center items-center cursor-pointer mb-3 mt-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all`}
          >
            {uploading ? (
              <div className="flex items-center gap-3 py-10 px-3">
                <Loader2Icon className="animate-spin" color="white" />
                <div className="text-white">Uploading...</div>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className={`flex flex-col justify-center items-center space-y-1 w-full h-full px-3 py-10 focus:outline-none font-medium`}
              >
                {!dragOver ? (
                  <>
                    <ImagePlusIcon size={32} color="white" />
                    <p className="text-white text-center">
                      Upload your payment screenshot containing transaction ID
                    </p>
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles size={32} color="white" />
                    <p className="text-white">Drop image to upload</p>
                  </div>
                )}
                <input {...getInputProps()} />
              </div>
            )}
          </section>
        )}
      </Dropzone>

      {imageUrl && (
        <div className="relative bg-zinc-100 dark:bg-zinc-800 w-52 aspect-video rounded-xl shadow-md my-5">
          <Image
            src={imageUrl}
            alt="screenshot"
            fill
            className="absolute object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
