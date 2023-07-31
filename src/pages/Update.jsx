import React from "react";
import GoalHeader from "../components/GoalHeader";
import step from "../assets/amico.png";
import Progress from "../components/Progress";

const Update = () => {
  return (
    <>
      <GoalHeader heading="Progress" />
      <div className="container d-flex justify-content-between align-items-center mt-3 pb-3 gap-lg-2">
        <div className="main-form py-5 px-1 ps-lg-2 ps-xl-3 pe-xl-3 rounded-2">
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
            <div>
              <p>Update Progress</p>
              <Progress num={20} />
              <input type="number" className="bg-transparent mt-2" />
            </div>
            <div className="mt-2">
              <button className="blue-bg p-2">Update</button>
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block main-img">
          <img src={step} alt="image of a step" />
        </div>
      </div>
    </>
  );
};

export default Update;
