const Settings = ({ formValues, setFormValues }) => {
  return (
    <>
      <legend>Notification Preferences</legend>
      <label htmlFor="email">
        <input
          name="preference"
          id="email"
          type="radio"
          value="Email"
          checked={formValues.preference === "Email"}
          onChange={setFormValues}
        ></input>
        Email
      </label>

      <label htmlFor="sms">
        <input
          name="preference"
          id="sms"
          type="radio"
          value="SMS"
          checked={formValues.preference === "SMS"}
          onChange={setFormValues}
        ></input>
        SMS
      </label>

      <label htmlFor="none">
        {" "}
        <input
          name="preference"
          id="none"
          type="radio"
          value="None"
          checked={formValues.preference === "None"}
          onChange={setFormValues}
        ></input>
        None
      </label>

      <button style={{ display: "block" }} type="submit">
        Submit
      </button>
    </>
  );
};

export default Settings;
