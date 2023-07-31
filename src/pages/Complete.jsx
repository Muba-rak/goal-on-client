import React, { useState } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";

const Complete = () => {
  const [Goals, setGoals] = useState(goals);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />
      <div>
        {Goals.map((g) => {
          return <Completed key={g.id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Complete;
