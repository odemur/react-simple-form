import React from "react";

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error: string | undefined;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Field;
