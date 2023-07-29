import React from "react";
import step from "../assets/amico.png";

const Create = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center mt-3 pb-3">
      <div className="main-form py-5 px-1 ps-lg-5">
        <form className="create-form">
          <div className="mt-2">
            <input
              type="text"
              placeholder="Goal Title"
              className="bg-transparent"
            />
          </div>
          <div className="mt-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Goal Description"
              className="bg-transparent"
            ></textarea>
          </div>
          <div className="mt-2">
            <button className="blue-bg p-2">Create Goal</button>
          </div>
        </form>
      </div>
      <div className="d-none d-lg-block">
        <img src={step} alt="image of a step" />
      </div>
    </div>
  );
};

export default Create;
