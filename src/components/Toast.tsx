import { X } from "lucide-react";

type ToastProps = {
  title: string;
  description: string;
  variant?: "success" | "error";
  onClose: () => void;
};

const variantClasses = {
  success: "border-slate-200 bg-white text-slate-950",
  error: "border-red-500 bg-red-500 text-slate-50",
};

const closeButtonClasses = {
  success: "text-slate-950/50 hover:text-slate-950",
  error: "text-red-300 hover:text-red-50",
};

// A notification box shown in a corner of the screen. The parent decides when to remove it.
export default function Toast({ title, description, variant = "success", onClose }: ToastProps) {
  return (
    <div className="fixed top-0 z-[100] flex w-full flex-col p-4 sm:bottom-0 sm:right-0 sm:top-auto md:max-w-[420px]">
      <div
        role="status"
        className={`group relative flex w-full animate-fade-in items-center justify-between overflow-hidden rounded-md border p-6 pr-8 shadow-lg ${variantClasses[variant]}`}
      >
        <div className="grid gap-1">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-sm opacity-90">{description}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none group-hover:opacity-100 ${closeButtonClasses[variant]}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
