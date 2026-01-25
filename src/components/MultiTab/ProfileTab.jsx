const Profile = ({ formValues, setFormValues, setStep, error, setError, isValidated }) => {
  return (
    <>
      <legend>Profile </legend>
      <label style={{ display: "block" }} htmlFor="age">
        Age
        <input
          id="age"
          name="age"
          type="number"
          required
          aria-required={true}
          aria-invalid={error?.age}
          aria-describedby={error?.age ? "age-error" : undefined}
          value={formValues.age}
          onChange={setFormValues}
        ></input>
      </label>
      {error?.age && (
        <p className="error" id="age-error" aria-live="assertive">
          {error.age}
        </p>
      )}
      <label style={{ display: "block" }} htmlFor="email">
        Email
        <input
          id="email"
          value={formValues.email}
          name="email"
          type="text"
          required
          aria-required={true}
          aria-invalid={error?.email}
          aria-describedby={error?.email ? "email-error" : undefined}
          onChange={setFormValues}
        ></input>
      </label>
      {error?.email?.length > 0 && (
        <p id="email-error" className="error" aria-live="assertive">
          {error.email}
        </p>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (isValidated(formValues)) {
            setStep();
          }
        }}
      >
        Next
      </button>
    </>
  );
};

export default Profile;
