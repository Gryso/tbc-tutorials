import React from "react";
import "./classAndRacePicker.scss";

export const BooleanInput = ({value, component, onChange}) => (
  <label>
    <input
      type="checkbox"
      checked={value}
      onChange={(event) => onChange(event.target.checked)}
    />
    {component}
  </label>
);

export const OneChoiceInput = ({value, options, onChange}) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              checked={value === option.identifier}
              onChange={(event) => {
                if (event.target.checked) {
                  onChange(option.identifier);
                } else {
                  onChange(false);
                }
              }}
            />
            {option.component}
          </label>
        );
      })}
    </>
  );
};

export const PercentageInput = ({value, name, onChange, disabled = false}) => (
  <label>
    {name}:
    <input
      max="100"
      min="0"
      step="0.01"
      type="number"
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);
