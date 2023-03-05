import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="address">
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="city">
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="state">
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="zipCode">
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutPage;
