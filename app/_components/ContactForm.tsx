"use client";

import { useForm } from "react-hook-form";
import ErrorImg from "@/public/contact/desktop/icon-error.svg";
import Image from "next/image";
import toast from "react-hot-toast";

type FormDataProps = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

function ContactForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormDataProps>();

  function onSubmit(data: FormDataProps) {
    toast.success("Your message has been sent!");
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="z-[3] flex flex-1 flex-col gap-[2.5rem] py-[5.4rem] laptop:w-full"
    >
      <div className="relative flex">
        <input
          placeholder="Name"
          type="text"
          className="w-full border-b border-white bg-transparent p-[1.1rem] text-[1.5rem] font-medium leading-[2.6rem] text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-[0]"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              if (/^[A-Za-z]+$/.test(trimmedValue)) {
                if (trimmedValue.length < 3) {
                  return "Name must be at least 3 characters";
                }
              } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Name must consist of only letters";
              }
              return true;
            },
          })}
        />

        {errors?.name?.message && typeof errors.name.message === "string" && (
          <span className="absolute right-0 top-[1.5rem] text-[1.2rem] italic leading-[2.6rem] text-white">
            {errors.name.message}
            <Image
              src={ErrorImg.src}
              alt="Error"
              width={20}
              height={20}
              className="ml-3 inline-block"
            />
          </span>
        )}
      </div>
      <div className="relative flex">
        <input
          placeholder="Email Address"
          type="text"
          className="w-full border-b border-white bg-transparent p-[1.1rem] text-[1.5rem] font-medium leading-[2.6rem] text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-[0]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors?.email?.message && typeof errors.email.message === "string" && (
          <span className="absolute right-0 top-[1.5rem] text-[1.2rem] italic leading-[2.6rem] text-white">
            {errors.email.message}
            <Image
              src={ErrorImg.src}
              alt="Error"
              width={20}
              height={20}
              className="ml-3 inline-block"
            />
          </span>
        )}
      </div>
      <div className="relative flex">
        <input
          placeholder="Phone"
          type="text"
          className="w-full border-b border-white bg-transparent p-[1.1rem] text-[1.5rem] font-medium leading-[2.6rem] text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-[0]"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\+?[0-9]\d{1,14}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors?.phone?.message && typeof errors.phone.message === "string" && (
          <span className="absolute right-0 top-[1.5rem] text-[1.2rem] italic leading-[2.6rem] text-white">
            {errors.phone.message}
            <Image
              src={ErrorImg.src}
              alt="Error"
              width={20}
              height={20}
              className="ml-3 inline-block"
            />
          </span>
        )}
      </div>
      <div className="relative flex">
        <textarea
          placeholder="Your Message"
          rows={3}
          className="w-full border-b border-white bg-transparent p-[1.1rem] text-[1.5rem] font-medium leading-[2.6rem] text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-[0]"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              // if (/^[A-Za-z]+$/.test(trimmedValue)) {
              if (trimmedValue.length < 10) {
                return "Message must be at least 10 characters long";
                // }
              }
              return true;
            },
          })}
        />
        {errors?.message?.message &&
          typeof errors.message.message === "string" && (
            <span className="absolute right-0 top-[1.5rem] text-[1.2rem] italic leading-[2.6rem] text-white">
              {errors.message.message}
              <Image
                src={ErrorImg.src}
                alt="Error"
                width={20}
                height={20}
                className="ml-3 inline-block"
              />
            </span>
          )}
      </div>

      <button className="self-end rounded-[0.8rem] bg-white px-[4.8rem] py-[1.7rem] text-[1.5rem] font-medium uppercase tracking-[0.1rem] text-[#333136] transition-all duration-300 hover:bg-[#ffad9b] hover:text-white">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
