import React, { useContext, useState } from "react";
import "./AddInspector.css";
import { FaTimes } from "react-icons/fa";
import { useGetAllMods } from "../../../hooks/User/useGetAllMods";
import { StoreContext } from "~store";
import { useAddInspectorToPlan } from "../../../hooks/Plan/useAddInspectorToPlan";

const AddInspector = (props) => {
  const { dataGetAllMods, errorGetAllMods, loadingGetAllMods } =
    useGetAllMods();
  const { errorAddInspectorToPlan, executeAddInspectorToPlan } =
    useAddInspectorToPlan();
  const [state] = useContext(StoreContext);
  let userId;
  const handleAddInspectorToPlan = async (planId) => {
    await executeAddInspectorToPlan(planId, userId, state.id, state.token);
    if (errorAddInspectorToPlan === "") {
      props.handleShowModalAddInspectorToPlan(false);
      props.handleShowSuccessAction("Added Moderator Successfully");
    }
  };

  return (
    <>
      {props.planId !== null && props.planId !== undefined && (
        <div className="add-inspector-container">
          <div className="add-inspector-content">
            <h1>Add Inspector To Plan</h1>
            <div className="x-icon">
              <FaTimes
                onClick={() => {
                  props.handleShowModalAddInspectorToPlan(false);
                }}
              />
            </div>
            <form>
              <label htmlFor="inspector-select">Chọn thanh tra:</label>
              <select
                id="inspector-select"
                onChange={(e) => {
                  userId = e.target.value;
                }}
              >
                <option value="" disabled defaultValue>
                  Chọn thanh tra:
                </option>
                {Array.isArray(dataGetAllMods) &&
                  dataGetAllMods.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.fullName}
                    </option>
                  ))}
              </select>
            </form>

            <button
              onClick={(e) => {
                e.preventDefault(), handleAddInspectorToPlan(props.planId);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddInspector;
