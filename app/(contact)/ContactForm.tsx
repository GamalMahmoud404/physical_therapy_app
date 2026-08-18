"use client";

import { useState } from "react";

import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";

import {
  UserIcon,
  PhoneIcon,
  MailIcon,
  ChatIcon,
  SendIcon,
  CheckIcon,
  AlertIcon,
  SpinnerIcon,
} from "./icons";

// =========================
// SHARED FIELD STYLES
// =========================

const fieldClasses = `
  w-full
  rounded-2xl
  border
  border-gray-200
  bg-gray-50/70
  py-3.5
  pe-4
  ps-12
  text-[15px]
  text-gray-800
  outline-none
  transition
  placeholder:text-gray-400
  focus:border-sky-400
  focus:bg-white
  focus:ring-4
  focus:ring-sky-100
  dark:border-neutral-700
  dark:bg-neutral-800/70
  dark:text-neutral-100
  dark:placeholder:text-neutral-500
  dark:focus:border-sky-500
  dark:focus:bg-neutral-800
  dark:focus:ring-sky-900/50
  disabled:cursor-not-allowed
  disabled:opacity-60
`;

const labelClasses =
  "mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-300";

const fieldIconClasses = `
  pointer-events-none
  absolute
  start-4
  text-gray-400
  transition-colors
  peer-focus:text-sky-500
  dark:text-neutral-400
  dark:peer-focus:text-sky-400
`;

// =========================
// نموذج التواصل — الجزء التفاعلي الوحيد في القسم
// =========================

export default function ContactForm({
  dict,
  locale,
}: {
  dict: Dictionary["contact"];
  locale: Locale;
}) {
  const t = dict;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =========================
  // HANDLE SUBMIT
  // =========================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // التحقق من البيانات
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage(t.validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      // محاولة قراءة JSON
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || t.sendFailed
        );
      }

      // نجاح
      setStatus("success");
      setErrorMessage("");

      // تنظيف الفورم
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("CONTACT ERROR:", error);

      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : t.genericError
      );

      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
      className="
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-6
        shadow-xl
        dark:border-neutral-800
        dark:bg-neutral-900
        md:p-10
        lg:col-span-3
      "
    >

      {/* ========================= */}
      {/* FORM HEADER */}
      {/* ========================= */}

      <div className="mb-8 flex items-start gap-4">

        <span
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-sky-50
            text-sky-600
            dark:bg-neutral-800
            dark:text-sky-400
          "
        >
          <SendIcon className="h-6 w-6" />
        </span>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-neutral-100">
            {t.formHeading}
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-neutral-400">
            {t.formDescription}
          </p>
        </div>

      </div>


      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div className="grid gap-5 sm:grid-cols-2">

          {/* ========================= */}
          {/* NAME */}
          {/* ========================= */}

          <div>
            <label htmlFor="name" className={labelClasses}>
              {t.nameLabel}

              <span className="ms-1 text-red-500">
                *
              </span>
            </label>

            <div className="relative flex items-center">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                disabled={isLoading}
                className={`peer ${fieldClasses}`}
              />

              <span className={fieldIconClasses}>
                <UserIcon />
              </span>
            </div>
          </div>


          {/* ========================= */}
          {/* PHONE */}
          {/* ========================= */}

          <div>
            <label htmlFor="phone" className={labelClasses}>
              {t.phoneFieldLabel}

              <span className="ms-1 text-red-500">
                *
              </span>
            </label>

            <div className="relative flex items-center">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                dir="ltr"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01000000000"
                required
                disabled={isLoading}
                className={`peer text-start ${fieldClasses}`}
              />

              <span className={fieldIconClasses}>
                <PhoneIcon />
              </span>
            </div>
          </div>

        </div>


        {/* ========================= */}
        {/* EMAIL */}
        {/* ========================= */}

        <div>
          <label htmlFor="email" className={labelClasses}>
            {t.emailFieldLabel}

            <span className="ms-2 text-xs font-normal text-gray-400 dark:text-neutral-400">
              {t.optional}
            </span>
          </label>

          <div className="relative flex items-center">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              dir="ltr"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              disabled={isLoading}
              className={`peer text-start ${fieldClasses}`}
            />

            <span className={fieldIconClasses}>
              <MailIcon />
            </span>
          </div>
        </div>


        {/* ========================= */}
        {/* MESSAGE */}
        {/* ========================= */}

        <div>
          <label htmlFor="message" className={labelClasses}>
            {t.messageLabel}

            <span className="ms-1 text-red-500">
              *
            </span>
          </label>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              rows={6}
              required
              disabled={isLoading}
              className={`peer resize-none leading-8 ${fieldClasses}`}
            />

            <span className={`${fieldIconClasses} top-4`}>
              <ChatIcon />
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-400 dark:text-neutral-400">
            {t.charCount.replace("{count}", String(formData.message.length))}
          </p>
        </div>


        {/* ========================= */}
        {/* STATUS */}
        {/* ========================= */}

        <div aria-live="polite">

          {status === "success" && (
            <div
              role="status"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-green-100
                bg-green-50
                p-4
                text-sm
                font-semibold
                text-green-700
              "
            >
              <CheckIcon className="h-5 w-5 shrink-0" />

              {t.successMessage}
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-red-100
                bg-red-50
                p-4
                text-sm
                font-semibold
                text-red-600
              "
            >
              <AlertIcon className="h-5 w-5 shrink-0" />

              {errorMessage ||
                t.genericError}
            </div>
          )}

        </div>


        {/* ========================= */}
        {/* SUBMIT */}
        {/* ========================= */}

        <button
          type="submit"
          disabled={isLoading}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-l
            from-sky-500
            to-sky-600
            px-6
            py-4
            font-bold
            text-white
            shadow-lg
            shadow-sky-500/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
            hover:shadow-sky-500/30
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
          "
        >
          {isLoading ? (
            <>
              <SpinnerIcon />
              {t.submitting}
            </>
          ) : (
            <>
              <SendIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {t.submit}
            </>
          )}
        </button>


        {/* ========================= */}
        {/* NOTE */}
        {/* ========================= */}

        <p className="text-center text-xs leading-6 text-gray-400 dark:text-neutral-400">
          {t.requiredNoteBefore}
          <span className="mx-1 text-red-500">*</span>
          {t.requiredNoteAfter}
        </p>

      </form>
    </div>
  );
}
