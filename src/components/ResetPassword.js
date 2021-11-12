import React from "react";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  //add logic to passwords
  return (
    <section id="resetPassword">
      <h5>Reset Password</h5>

      <form>
        <h4>Please enter old password:</h4>
        <label for="oldPassword">Old Password </label>
        <input
          type="text"
          placeholder="Old Password"
          {...register("oldPassword", { required: true })}
        />

        <br />
        <br />

        <label for="newPassword">New Password </label>
        <input
          type="text"
          placeholder="New Password"
          {...register("newPassword", { required: true })}
        />

        <br />

        <label for="reEnterNewPassword">Re-enter New Password </label>
        <input
          type="text"
          placeholder="Re Enter New Password"
          {...register("reEnterNewPassword", { required: true })}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ResetPassword;
