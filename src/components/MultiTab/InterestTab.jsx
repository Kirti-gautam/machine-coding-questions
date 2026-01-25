const Interest = ({ formValues, setFormValues, setStep }) => {
  return (
    <>
      <legend>Interest</legend>

      <label style={{ display: "block" }} htmlFor="interest">
        Select Interest:
        <select name="interest" id="interest" value={formValues.interest} onChange={setFormValues}>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
          <option value="Technology">Technology</option>
        </select>
      </label>
      <label style={{ display: "block" }} htmlFor="newsletter">
        Subscribe to my Newletter
        <input
          id="newsletter"
          name="newsletter"
          checked={!!formValues.newsletter}
          type="checkbox"
          onChange={setFormValues}
        />
      </label>

      <button
        style={{ display: "block" }}
        onClick={(e) => {
          e.preventDefault();
          setStep();
        }}
      >
        Next
      </button>
    </>
  );
};

export default Interest;
