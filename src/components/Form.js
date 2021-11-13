import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

//department
//status
//responses
//title
//content
function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/", register)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section id="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Department</h5>

        <select {...register("department")}>
          <option value="general">General</option>
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
        </select>
        {
          // <input
          //   type="radio"
          //   name="department"
          //   value="general"
          //   id="general"
          //   required
          // />
          // <label for="general">General</label>
          // <input type="radio" name="department" value="frontend" id="frontend" />
          // <label for="frontend">Front End</label>
          // <input type="radio" name="department" value="backend" id="backend" />
          // <label for="backend">Back End</label>
        }
        <h5>
          <label for="status">Status:</label>
        </h5>
        <select name="status" id="status" {...register("status")}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <h5>
          <label for="title">Title</label>
        </h5>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", { required: true })}
        />

        <h5>
          <label for="content">Content</label>
        </h5>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="50"
          {...register("content", { required: true })}
        >
          Please specify the issue.
        </textarea>
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default Form;
