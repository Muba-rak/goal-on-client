import React from "react";
import Progress from "./Progress";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Goal = ({ tag, description, id }) => {
  return (
    <div className="border-bottom border-3 border-secondary-subtle pb-4 px-4 mt-4 shadow-sm">
      <p className="text-secondary fw-light"> {`Congratulations 🎉`} </p>

      <h2 className="fw-bold">{tag}</h2>
      <p>{description} </p>
      <div className="d-block d-md-flex align-items-end justify-content-between">
        <Progress num={100} />
        <div className="mt-2 mt-lg-0 d-flex gap-4">
          <button className="blue-bg p-2 editbtn">
            <Link
              to={`/update/${id}`}
              className="text-decoration-none text-white"
            >
              {" "}
              <MdOutlineModeEditOutline />
              Edit{" "}
            </Link>
          </button>
          <button className="p-2 border-none bg-transparent transparent delbtn">
            <RiDeleteBinLine /> Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
