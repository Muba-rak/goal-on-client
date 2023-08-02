import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";
import goals from "../data/goals";
import Goal from "../components/Goal";
import Loading from "../components/Loading";
const Allgoals = () => {
  const [Goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getGoals = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/goals");
      const data = await res.json();
      setIsLoading(false);
      setGoals(data.goals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading />}
      <div>
        <div>
          {Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
