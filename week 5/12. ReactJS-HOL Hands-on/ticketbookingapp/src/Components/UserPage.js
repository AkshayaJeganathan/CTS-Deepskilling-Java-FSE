import React from "react";

function UserPage() {

  return (

    <div>

      <h2>Welcome User</h2>

      <h3>Flight Ticket Booking</h3>

      <table border="1" cellPadding="10" align="center">

        <thead>

          <tr>
            <th>Flight</th>
            <th>Route</th>
            <th>Price</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>AI-202</td>
            <td>Chennai → Delhi</td>
            <td>₹5500</td>
            <td>Available</td>
          </tr>

          <tr>
            <td>IN-404</td>
            <td>Bangalore → Mumbai</td>
            <td>₹4800</td>
            <td>Available</td>
          </tr>

        </tbody>

      </table>

      <br />

      <button>Book Ticket</button>

    </div>

  );

}

export default UserPage;