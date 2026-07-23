"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  jobType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  jobType: "",
  message: "",
};

const JOB_TYPES = [
  "Marine electrical installation & repair",
  "Fly-by-wire installation",
  "DC systems / solar fault-finding",
  "CCTV installation",
  "Engine room / machinery inspection",
  "Anchor & capstan systems",
  "General marine engineering",
  "Not sure — describe below",
];

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Enter your name.";

  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone && !/^[0-9+()\s-]{7,20}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.jobType) errors.jobType = "Select a job type.";

  if (!values.message.trim()) {
    errors.message = "Tell us a little about the job.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A few more details would help — at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      // Placeholder submit handler — wire this to a real backend or email
      // service (e.g. an API route calling Resend, SendGrid, or a form
      // endpoint) once one is available.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-plate border border-verdigris-400/50 bg-verdigris-600/10 p-8 text-center"
      >
        <p className="eyebrow text-verdigris-300">Message received</p>
        <p className="mt-3 font-display text-xl text-paper-50">
          Thanks — we&apos;ll be in touch shortly.
        </p>
        <p className="mt-2 text-sm text-paper-300/75">
          For anything urgent, call {" "}
          <a href="tel:+447873944007" className="text-brass-200 underline underline-offset-4">
            07873 944 007
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            className={inputClasses(!!errors.name)}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={inputClasses(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            className={inputClasses(!!errors.phone)}
          />
        </Field>

        <Field label="Vessel / job type" htmlFor="jobType" error={errors.jobType}>
          <select
            id="jobType"
            name="jobType"
            value={values.jobType}
            onChange={(e) => update("jobType", e.target.value)}
            aria-invalid={!!errors.jobType}
            className={inputClasses(!!errors.jobType)}
          >
            <option value="">Select…</option>
            {JOB_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClasses(!!errors.message)}
          placeholder="Vessel type, location, and what's going on with it…"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-safety-300">
          Something went wrong sending your message. Please try again, or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-plate bg-safety-400 px-7 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper-50 shadow-plate transition-colors hover:bg-safety-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow mb-2 block text-paper-200/80">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-safety-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-plate border bg-abyss-600 px-4 py-3 text-sm text-paper-50 placeholder:text-steel-400 focus:outline-none ${
    hasError ? "border-safety-400" : "border-steel-600/50 focus:border-brass-400"
  }`;
}
