import React, { useState } from "react";
import Goal from "../components/Goal";
import goals from "../data/goals";

const Ongoing = () => {
  const [Goals, setGoals] = useState(goals);

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Ongoing</h2>
        <p className="blue-text">+ Create new goals</p>
      </div>
      <div>
        {Goals.map((g) => {
          return <Goal key={g.id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Ongoing;
