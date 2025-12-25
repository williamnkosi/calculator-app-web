type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  type?: "text" | "number" | "range" | "select";
  min?: number;
  max?: number;
  step?: number;
  options?: { value: number | string; label: string }[];
  placeholder?: string;
  showValue?: boolean;
  suffix?: string;
};

export default function Input({
  label,
  value,
  onChange,
  type = "number",
  min,
  max,
  step,
  options,
  placeholder,
  showValue = true,
  suffix,
}: Props) {
  const displayValue = showValue ? `${value}${suffix || ""}` : "";

  if (type === "select" && options) {
    return (
      <div>
        <label className="block text-sm font-semibold text-zinc-700 mb-2">
          {label}
        </label>
        <select
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-zinc-700 mb-2">
        {label}
        {showValue && <span className="font-normal"> {displayValue}</span>}
      </label>

      {type === "range" && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full"
        />
      )}

      <input
        type={type === "range" ? "number" : type}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
      />
    </div>
  );
}
