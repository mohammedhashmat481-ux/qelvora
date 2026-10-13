import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-neutral-300 select-none"
        >
          {label}
          {props.required && <span className="text-gold-light ml-1">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : hint ? hintId : undefined
          }
          className={cn(
            "w-full min-h-[44px] px-3.5 py-2.5 bg-[#171717] border border-white/15 rounded-input text-sm text-white placeholder:text-neutral-500",
            "transition-colors duration-150",
            "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-400">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-red-400 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-neutral-300 select-none"
        >
          {label}
          {props.required && <span className="text-gold-light ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : hint ? hintId : undefined
          }
          rows={4}
          className={cn(
            "w-full px-3.5 py-2.5 bg-[#171717] border border-white/15 rounded-input text-sm text-white placeholder:text-neutral-500",
            "transition-colors duration-150",
            "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-400">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-red-400 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, hint, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-neutral-300 select-none"
        >
          {label}
          {props.required && <span className="text-gold-light ml-1">*</span>}
        </label>
        <select
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : hint ? hintId : undefined
          }
          className={cn(
            "w-full min-h-[44px] px-3.5 py-2.5 bg-[#171717] border border-white/15 rounded-input text-sm text-white",
            "transition-colors duration-150",
            "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-charcoal text-white py-1"
            >
              {opt.label}
            </option>
          ))}
        </select>
        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-400">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-red-400 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
