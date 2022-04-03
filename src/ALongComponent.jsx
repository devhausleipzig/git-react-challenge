import React, { useState } from "react";

export function ALongComponent() {
  const [fruit, setFruit] = useState("");
  const [givenName, setGivenName] = useState("");
  const [surName, setSurName] = useState("");
  const [street, setStreet] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit() {
    alert("Your favorite flavor is: " + fruit);
  }

  return (
    <div>
      <h1>Order some fruit for your Vitamin C</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <br />
          <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <br />
        <h3>Add your shipping address:</h3>
        <label>
          Given name:
          <input
            type="text"
            value={givenName}
            onChange={(e) => setGivenName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <br />
        <label>
          PostCode:
          <input
            type="text"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Order the fruit" />
      </form>
    </div>
  );
}
