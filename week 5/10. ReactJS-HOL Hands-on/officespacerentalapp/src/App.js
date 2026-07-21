import React from "react";
import "./App.css";

import office1 from "./Images/office1.jpg";
import office2 from "./Images/office2.jpg";
import office3 from "./Images/office3.jpg";

function App() {

  const offices = [
    {
      name: "Sky Tower Workspace",
      rent: 45000,
      address: "Chennai",
      image: office1
    },
    {
      name: "Elite Business Center",
      rent: 75000,
      address: "Bangalore",
      image: office2
    },
    {
      name: "Tech Park Office",
      rent: 95000,
      address: "Hyderabad",
      image: office3
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (

        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "20px",
            margin: "20px",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >

          <img
            src={office.image}
            alt="office"
            width="350"
            height="220"
          />

          <h2>{office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent : ₹ {office.rent}
          </h3>

          <h4>Address : {office.address}</h4>

        </div>

      ))}

    </div>
  );
}

export default App;