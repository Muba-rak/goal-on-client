import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";

import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
const Allgoals = () => {
  const {
    isLoading,
    data: { goals: Goals },
  } = useFetch("https://goalonapi.onrender.com/api/goals");

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading />}
      <div>
        <div>
          {Goals && Goals.length < 1 ? (
            <Empty />
          ) : (
            Goals.map((g) => {
              return <Goal key={g._id} {...g} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
