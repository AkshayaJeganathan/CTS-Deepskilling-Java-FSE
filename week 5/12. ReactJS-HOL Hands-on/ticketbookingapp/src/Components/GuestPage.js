import React from "react";

function GuestPage() {
  return (
    <div>

      <h2>Guest Page</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10" align="center">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>₹5500</td>
          </tr>

          <tr>
            <td>IN-404</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>₹4800</td>
          </tr>

          <tr>
            <td>SG-505</td>
            <td>Hyderabad</td>
            <td>Kolkata</td>
            <td>₹6200</td>
          </tr>

        </tbody>

      </table>

      <br />

      <h4>Please Login to Book Tickets</h4>

    </div>
  );
}

export default GuestPage;