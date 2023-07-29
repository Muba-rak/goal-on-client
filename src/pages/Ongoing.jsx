import React from "react";
import Progress from "../components/Progress";

const Ongoing = () => {
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Ongoing</h2>
        <p className="blue-text">+ Create new goals</p>
      </div>
      <Progress num={30} />
      <Progress num={50} />
      <Progress num={100} />
    </div>
  );
};

export default Ongoing;
