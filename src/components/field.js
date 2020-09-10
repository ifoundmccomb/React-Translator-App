import React from "react";

export default ({ label, value, onChange }) => {
  return (
    <section className="translate-entry">
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
};
