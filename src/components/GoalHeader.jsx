import React from "react";
import { Link } from "react-router-dom";

const GoalHeader = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Ongoing</h2>
        <p className="blue-text">
          <Link className="text-decoration-none blue-text fw-bold" to="/create">
            {" "}
            + Create new goals
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GoalHeader;
