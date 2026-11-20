import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle, Facebook, Instagram, Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";
import ExternalLink from "@/components/ExternalLink";
import Section from "@/components/Section";
import Toast from "@/components/Toast";
import { contactEmail, socialLinks } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAILJS_PUBLIC_KEY = "-Q-rUQo795S9S_uXQ";
const EMAILJS_SERVICE_ID = "service_fv979s4";
const EMAILJS_TEMPLATE_ID = "template_cyr9l4q";
const MESSAGE_VISIBLE_MS = 5000;

// The value is sent in the email, so it stays in English; the label is translated.
const subjects = [
  { value: "General Inquiry", labelKey: "contact.subject.general" },
  { value: "Event Information", labelKey: "contact.subject.events" },
  { value: "Class Registration", labelKey: "contact.subject.classes" },
  { value: "Partnership Opportunity", labelKey: "contact.subject.partnership" },
  { value: "Feedback", labelKey: "contact.subject.feedback" },
  { value: "Other", labelKey: "contact.subject.other" },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

const labelClasses = "mb-1 block text-sm font-medium text-forro-brown";
const fieldClasses =
  "w-full rounded-md border border-gray-200 px-4 py-2 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-forro-amber";

type ToastMessage = {
  variant: "success" | "error";
  title: string;
  description: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), MESSAGE_VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => setIsSubmitted(false), MESSAGE_VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      title: form.subject,
      name: form.name,
      message: form.message,
      email: form.email,
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setForm(emptyForm);
      setIsSubmitted(true);
      setToast({ variant: "success", title: t("contact.toast.sent_title"), description: t("contact.toast.sent_description") });
    } catch (error) {
      console.error("Failed to send email:", error);
      setToast({ variant: "error", title: t("contact.toast.error_title"), description: t("contact.toast.error_description") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title={t("contact.title")} background="beige">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 font-display text-3xl font-medium text-forro-brown">{t("contact.get_in_touch")}</h2>
          <div className="flex items-start">
            <Mail size={20} className="mr-4 mt-1 text-forro-orange" />
            <div>
              <h3 className="mb-1 text-lg font-medium text-forro-brown">{t("contact.email_us")}</h3>
              <p className="text-forro-brown">
                <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-forro-amber">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-4 font-display text-xl font-medium text-forro-brown">{t("contact.follow_us")}</h3>
            <p className="mb-4 text-forro-brown">{t("contact.follow_us_description")}</p>
            <ExternalLink
              href={socialLinks.facebook}
              className="flex items-center text-forro-brown transition-colors duration-300 hover:text-forro-amber"
            >
              <Facebook size={20} className="mr-2 text-forro-brown" />
              <span>Forrozeiros CZ</span>
            </ExternalLink>
            <ExternalLink
              href={socialLinks.instagram}
              className="mt-4 flex items-center text-forro-brown transition-colors duration-300 hover:text-forro-amber"
            >
              <Instagram size={20} className="mr-2 text-forro-orange" />
              <span>@forrozeiros_cz</span>
            </ExternalLink>
          </div>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 font-display text-2xl font-medium text-forro-brown">{t("contact.form.title")}</h2>

          {isSubmitted ? (
            <div className="flex items-start rounded-lg bg-green-50 p-4 text-green-600">
              <CheckCircle className="mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium">{t("contact.success.title")}</h3>
                <p>{t("contact.success.description")}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    {t("contact.form.your_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    {t("contact.form.your_email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClasses}>
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={fieldClasses}
                >
                  <option value="">{t("contact.form.subject_placeholder")}</option>
                  {subjects.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {t(subject.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  {t("contact.form.your_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={fieldClasses}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md bg-forro-brown px-4 py-3 text-white transition-colors duration-300 hover:bg-forro-rust/90"
              >
                {isSubmitting ? (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    {t("contact.form.submit")}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {toast && (
        <Toast
          variant={toast.variant}
          title={toast.title}
          description={toast.description}
          onClose={() => setToast(null)}
        />
      )}
    </Section>
  );
}
