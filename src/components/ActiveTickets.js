import React from "react";
import { useForm } from "react-hook-form";

function ActiveTickets() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section id="activeTickets">
      <h5>
        <label for="content">Current Tickets:</label>
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table style={{ marginLeft: "auto", marginRight: "auto" }}>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>test1</td>
            <td>test2</td>
            <td>test3</td>
          </tr>
        </table>
        <br />
        <button type="submit" value="Submit">
          Create New Ticket
        </button>
      </form>
    </section>
  );
}

export default ActiveTickets;
