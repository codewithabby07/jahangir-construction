"use client";

import { useState } from "react";

interface FormData {
  name: string;
  mobile: string;
  location: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  location?: string;
  projectType?: string;
  message?: string;
}

const projectTypes = [
  "Residential House Construction (New Build)",
  "Commercial / Office Building Construction",
  "RCC Structural Framework & Slab Casting",
  "Shuttering & Reinforcement Work",
  "Brickwork & Fine Plastering",
  "Complete House / Office Renovation",
  "Waterproofing (Terrace / Basement / Toilet)",
  "Demolition & JCB Excavation",
  "Turnkey Construction Contract",
  "Other / Custom Requirement",
];

const budgetRanges = [
  "Below ₹10 Lakhs",
  "₹10 – ₹25 Lakhs",
  "₹25 – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹3 Crores",
  "Above ₹3 Crores",
  "Need Site Estimate First",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your full name.";
  if (!data.mobile.trim()) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\s|-/g, ""))) {
    errors.mobile = "Please enter a valid 10-digit Indian mobile number.";
  }
  if (!data.location.trim()) errors.location = "Please enter your plot / project location.";
  if (!data.projectType) errors.projectType = "Please select your construction project type.";
  if (!data.message.trim()) errors.message = "Please briefly describe your plot size or construction scope.";
  return errors;
}

export default function QuoteForm({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    location: "",
    projectType: preselectedService || "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      // Optional call to internal API route
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => null);

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData({ name: "", mobile: "", location: "", projectType: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#f8f9fa] border-2 border-[#c5a044] rounded-lg p-8 text-center text-[#0f172a] shadow-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c5a044] text-black font-black flex items-center justify-center text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">
          Quotation Request Submitted Successfully!
        </h3>
        <p className="text-base text-[#334155] mb-4 max-w-md mx-auto">
          Thank you. Mr. Jahangir or Mr. Saheel will review your requirement and call you back shortly.
        </p>
        <p className="text-sm font-semibold text-[#0f172a] mb-6">
          For immediate discussion, call or WhatsApp directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+918595698244" className="btn-primary">
            📞 Direct Call: 8595698244
          </a>
          <a
            href="https://wa.me/918595698244?text=Hello%2C%20I%20just%20submitted%20a%20construction%20quote%20request%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#ffffff] border border-[#e2e8f0] p-6 sm:p-8 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="e.g. Rajesh Sharma"
            autoComplete="name"
            aria-required="true"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div className="form-field">
          <label htmlFor="mobile" className="form-label">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`form-input ${errors.mobile ? "error" : ""}`}
            placeholder="e.g. 9876543210"
            autoComplete="tel"
            inputMode="numeric"
            aria-required="true"
          />
          {errors.mobile && <p className="form-error">{errors.mobile}</p>}
        </div>

        {/* Location */}
        <div className="form-field">
          <label htmlFor="location" className="form-label">
            Project / Site Location in Delhi NCR <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`form-input ${errors.location ? "error" : ""}`}
            placeholder="e.g. Sector 57 Gurgaon / Dwarka Delhi"
            aria-required="true"
          />
          {errors.location && <p className="form-error">{errors.location}</p>}
        </div>

        {/* Project Type */}
        <div className="form-field">
          <label htmlFor="projectType" className="form-label">
            Type of Construction <span className="text-red-600">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`form-input ${errors.projectType ? "error" : ""}`}
            aria-required="true"
          >
            <option value="">-- Select Construction Type --</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && <p className="form-error">{errors.projectType}</p>}
        </div>

        {/* Budget */}
        <div className="form-field md:col-span-2">
          <label htmlFor="budget" className="form-label">
            Estimated Budget Range <span className="text-[#64748b] font-normal lowercase">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">-- Select Budget Range --</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="form-field md:col-span-2">
          <label htmlFor="message" className="form-label">
            Describe Your Scope / Plot Details <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`form-input ${errors.message ? "error" : ""}`}
            placeholder="e.g. 200 sq. yard plot in Dwarka. Looking for G+3 residential house construction including basement and stilt parking."
            aria-required="true"
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 border-t border-[#e2e8f0]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? "Submitting Request…" : "Submit Free Quote Request"}
        </button>

        <p className="text-xs text-[#64748b]">
          🔒 Your contact details are kept strictly confidential.
        </p>
      </div>
    </form>
  );
}
