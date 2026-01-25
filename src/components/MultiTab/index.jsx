import React, { useState } from "react";
import Profile from "./ProfileTab";
import Interest from "./InterestTab";
import Settings from "./SettingsTab";

const validateAge = (age) => {
  if (!age || age.trim().length === 0) return false;
  return !isNaN(age) && Number(age) > 0;
};

const validateEmail = (email) => {
  if (!email || email.trim().length === 0) return false;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const MultiTabForm = () => {
  const tabs = ["Profile", "Interest", "Settings"];
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});
  const [formValues, setFormValues] = useState({
    age: "",
    email: "",
    interest: "Sports",
    newsletter: false,
    preference: "None",
  });

  const isValidated = () => {
    let flag = true;
    const errors = {};
    console.log("formValues", formValues);
    if (!validateAge(formValues.age)) {
      errors.age = "Age is required and must be numeric";
      flag = false;
    }
    if (!validateEmail(formValues.email)) {
      errors.email = "Enter a valid email";
      flag = false;
    }
    setError(errors);
    return flag;
  };

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    console.log("name", name, type, value, checked, formValues);
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isValidated()) {
      alert(JSON.stringify(formValues, null, 2));
    }
  };

  return (
    <>
      <h1>Multi Tab Form</h1>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              padding: "4px",
              backgroundColor: "green",
              borderRadius: "4px",
              marginRight: "8px",
              marginBottom: "8px",
              cursor: "pointer",
            }}
            role={tab}
            aria-selected={index + 1 === step}
            aria-controls={`step-${index + 1}-tab`}
            onClick={() => {
              setStep(() => index + 1);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <fieldset role="tabpanel" aria-labelledby={`step-${step}-1`}>
          {step === 1 && (
            <Profile
              formValues={formValues}
              setFormValues={handleInputChange}
              setStep={increaseStep}
              error={error}
              setError={setError}
              isValidated={isValidated}
            />
          )}
          {step === 2 && (
            <Interest
              formValues={formValues}
              setFormValues={handleInputChange}
              setStep={increaseStep}
            />
          )}
          {step === 3 && (
            <Settings
              formValues={formValues}
              setFormValues={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </fieldset>
      </form>
    </>
  );
};

export default MultiTabForm;
