import React, { useState } from "react";
import GoalHeader from "../components/GoalHeader";
import goals from "../data/goals";
import Goal from "../components/Goal";

const Allgoals = () => {
  const [Goals, setGoals] = useState(goals);
  return (
    <div className="container">
      <GoalHeader />
      <div>
        <div>
          {Goals.map((g) => {
            return <Goal key={g.id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
