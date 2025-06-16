import React, { useState, useEffect } from "react";

const AnotherFormValidation = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    agreed: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form every time input changes
  useEffect(() => {
    const newErrors = {
      name: name.trim().length >= 3 ? "" : "Name must be at least 3 characters.",
      gender: gender ? "" : "Please select a gender.",
      country: country ? "" : "Please select a country.",
      agreed: agreed ? "" : "You must agree to the terms.",
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((e) => e === "");
    setIsFormValid(isValid);
  }, [name, gender, country, agreed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Validation Form</h2>

      {/* Name Input */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* Radio Buttons */}
      <div>
        <label>Gender:</label>
        <br />
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label style={{ marginLeft: "1em" }}>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      {/* Dropdown */}
      <div>
        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Select country --</option>
          <option value="vietnam">Vietnam</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>

      {/* Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to the terms
        </label>
        {errors.agreed && <p style={{ color: "red" }}>{errors.agreed}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default AnotherFormValidation;
