import React, { useState } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import { Link } from "react-router-dom";

const Complete = () => {
  const [Goals, setGoals] = useState(goals);
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Ongoing</h2>
        <p className="blue-text">
          <Link className="text-decoration-none blue-text" to="/create">
            {" "}
            + Create new goals
          </Link>
        </p>
      </div>
      <div>
        {Goals.map((g) => {
          return <Completed key={g.id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Complete;
