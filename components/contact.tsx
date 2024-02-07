"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";
import { messageTemplate, subjectTemplate } from "@/lib/data";
import { BsFillShiftFill } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:maher.aladdin.mansour@gmail.com">
          maher.aladdin.mansour@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-3 dark:text-black"
        action={(formData) => {
          let style = {};
          if (theme === "dark")
            style = {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            };

          toast
            .promise(
              sendEmail(formData),
              {
                loading: "Sending email...",
                success: "Email sent successfully!",
                error: "Failed to send email",
              },
              { style },
            )
            .then(() => {
              setEmail("");
              setSubject("");
              setMessage("");
            });
        }}
      >
        <label
          className={
            "text-xl text-black dark:text-white self-start select-none capitalize"
          }
          htmlFor={"email"}
        >
          Email
        </label>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          id={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className={
            "text-xl text-black dark:text-white self-start select-none capitalize flex justify-between w-full"
          }
        >
          <label htmlFor={"subject"}>subject</label>
          <div
            className={"flex items-center gap-2 text-xs"}
            onClick={() => setSubject(subjectTemplate)}
          >
            press
            <span
              role={"button"}
              className={"bg-black text-white py-0.5 px-1 rounded-md"}
            >
              <BsFillShiftFill />
            </span>
            to generate template
          </div>
        </div>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="subject"
          type="text"
          required
          maxLength={500}
          placeholder={subjectTemplate}
          id={"subject"}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onKeyDown={(event) => {
            if (subject.length === 0 && event.key === "Tab") {
              event.preventDefault();
              setSubject(subjectTemplate);
            }
          }}
        />
        <div
          className={
            "text-xl text-black dark:text-white self-start select-none capitalize flex justify-between w-full"
          }
        >
          <label htmlFor={"message"}>message</label>
          <div
            className={"flex items-center gap-2 text-xs"}
            onClick={() => setMessage(messageTemplate)}
          >
            press
            <span
              role={"button"}
              className={"bg-black text-white py-0.5 px-1 rounded-md"}
            >
              <BsFillShiftFill />
            </span>
            to generate template
          </div>
        </div>
        <textarea
          className="h-96 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none resize-none"
          name="message"
          placeholder={messageTemplate}
          required
          maxLength={5000}
          id={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(event) => {
            if (message.length === 0 && event.key === "Tab") {
              event.preventDefault();
              setMessage(messageTemplate);
            }
          }}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
