import React, { useState } from "react";
import Goal from "../components/Goal";
import goals from "../data/goals";
import GoalHeader from "../components/GoalHeader";

const Ongoing = () => {
  const [Goals, setGoals] = useState(goals);

  return (
    <div className="container mt-2">
      <GoalHeader />
      <div>
        {Goals.map((g) => {
          return <Goal key={g.id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Ongoing;
