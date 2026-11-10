// src/components/Input/Input.tsx
import "./Input.css";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
};

export function Input({
  label,
  value,
  onChange,
  placeholder,
  error
}: InputProps) {
  return (
    <label className="input-field">
      <span>{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <small className="input-error">{error}</small>}
    </label>
  );
}
