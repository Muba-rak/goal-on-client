import React from "react";
import GoalHeader from "../components/GoalHeader";

import SingleGoal from "../components/SingleGoal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";

const Allgoals = () => {
  const {
    isLoading,
    data: { goals: Goals },
    isError,
  } = useFetch("https://goalonapi.onrender.com/api/goals");

  if (!isLoading && isError) {
    return <ErrorFetch />;
  }

  if (!isLoading && Goals.length < 1) {
    return <Empty />;
  }
  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading />}
      <div>
        <div>
          {Goals &&
            Goals.map((g) => {
              return <SingleGoal key={g._id} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
