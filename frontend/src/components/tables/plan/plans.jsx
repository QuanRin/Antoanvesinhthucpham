/* eslint-disable jsx-a11y/aria-role */
import { DateConvert } from "../../../utils/DateConvert";
import "./plans.css";
import { RequireAuth } from "./../../../hoc/RequiredAuth";
import { useDeletePlan } from "../../../hooks/Plan/useDeletePlan";
// import { usePlanDetails } from "../../../hooks/Plan/usePlanDetails";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "~store";
import { useGetPlanDocx } from "../../../hooks/Plan/useGetPlanDocx";
export const PlanRowElement = (props) => {
  const [state] = useContext(StoreContext);

  const [path, setPath] = useState("");
  const { errorDeletePlan, executeDeletePlan } = useDeletePlan();
  const handleAddInspector = async () => {
    await props.handleShowModalAddInspectorToPlan(true);
    await props.setPlanId(props.id);
  };
  const handleCancelPlan = async (e) => {
    e.preventDefault();
    await executeDeletePlan(props.id, state.id, state.token);
    await props.fetchDataPlans();
    await props.handleShowSuccessAction("Canceled Plan");
  };
  const handleShowDetailsPlan = async (e) => {
    e.preventDefault();
    await props.handleShowMoDalDetailsPlan(true);
    await props.handleSetPlanId(props.id);
  };

  const handleShowReport = async () => {
    if (state.role === "Admin") {
      props.handleShowMoDalReport(true);
      props.setPlanId(props.id);
    }
    if (state.role === "Moderator") {
      props.handleShowModalSubmitDocx(true);
      props.setPlanId(props.id);
    }
  };
  const hanldeEditTime = () => {
    props.handleShowModalUpdatePlan(true);
    props.handleSetTimePlan(props.time, props.id);
  };
  return (
    <>
      <tr>
        <td style={{ textAlign: "center", padding: 0, width: 50 }}>
          {props.index}
        </td>
        <td>{props.company.companyName}</td>
        <td>{DateConvert(props.time)}</td>
        <td className="td-button" style={{ overflow: "hidden" }}>
          <button onClick={handleShowReport}>Report</button>
          <button onClick={handleShowDetailsPlan}>Details</button>
          {state.role === "Admin" && (
            <button onClick={hanldeEditTime}>Edit Time</button>
          )}
          {state.role === "Admin" && (
            <button onClick={handleCancelPlan}>Cancel</button>
          )}

          {state.role === "Admin" && (
            <button onClick={handleAddInspector}>Add Inspector</button>
          )}
          {/* </RequireAuth> */}
        </td>
      </tr>
    </>
  );
};
