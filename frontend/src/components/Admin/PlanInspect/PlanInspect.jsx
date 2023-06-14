/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect, useContext } from "react";
import { Pagination, TablePagination } from "@mui/material";
import "./PlanInspect.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddPlan from "../../form/AddPlan/AddPlan";
import UpdatePlan from "../../form/UpdatePlan/UpdatePlan";
import { RequireAuth } from "../../../hoc/RequiredAuth";
import { PlanRowElement } from "../../tables";
import DetailsPlan from "../../form/DetailsPlan/DetailsPlan";
import { usePlan } from "../../../hooks/Plan/usePlan";

import ReportDocx from "../../form/ReportDocx/ReportDocx";
import ActionSuccess from "../../ActionSuccess/ActionSuccess";
import { useGetSpecific } from "../../../hooks/Plan/useGetSpecificPlan";
import { StoreContext } from "~store";
import AddInspector from "../../form/AddInspector/AddInspector";
import SubmitDocx from "../../../components/form/SubmitDocx/SubmitDocx";
function PlanInspect() {
  const [state] = useContext(StoreContext);

  const [showModalAddInspector, setShowModalAddInspector] = useState(false);
  const handleShowModalAddInspectorToPlan = (value) => {
    setShowModalAddInspector(value);
  };
  const [showModalSubmitDocx, setShowModalSubmitDocx] = useState(false);
  const handleShowModalSubmitDocx = (value) => {
    setShowModalSubmitDocx(value);
  };
  const [showModalReport, setShowModalReport] = useState(false);
  const handleShowMoDalReport = (value) => {
    setShowModalReport(value);
  };
  const [showModalDetailsPlan, setShowModalDetailsPlan] = useState(false);
  const handleShowMoDalDetailsPlan = (value) => {
    setShowModalDetailsPlan(value);
  };
  const [showModalUpdatePlan, setShowModalUpdatePlan] = useState(false);
  const handleShowModalUpdatePlan = (value) => {
    setShowModalUpdatePlan(value);
  };
  const [showModalAddPlan, setShowModalAddPlan] = useState(false);
  const handleShowModalAddPlan = (value) => {
    setShowModalAddPlan(value);
  };

  // get Plans
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, error, executeAllPlans } = usePlan(
    filter,
    state.id,
    state.token
  );
  const fetchDataPlans = () => {
    executeAllPlans({ page: pageCurrent }, state.id, state.token);
  };
  const [messageAction, setMessageAction] = useState("");
  const [showActionSuccess, setShowActionSuccess] = useState(false);
  const handleShowSuccessAction = (message) => {
    toast.success(message);
  };
  const [time, setTime] = useState(null);
  const [planId, setPlanId] = useState(null);
  const handleSetTimePlan = (time, planId) => {
    setTime(time);
    setPlanId(planId);
  };
  const [detailsPlan, setDetailsPlan] = useState({});

  const {
    dataGetSpecificPlan,
    errorGetSpecificPlan,
    successGetSpecificPlan,
    executeGetSpecificPlan,
  } = useGetSpecific();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSetPlanId = async (id) => {
    await executeGetSpecificPlan(id, state.id, state.token);
  };
  useEffect(() => {
    if (successGetSpecificPlan) {
      setIsLoaded(true);
      setDetailsPlan(dataGetSpecificPlan);
    }
  }, [executeGetSpecificPlan, successGetSpecificPlan]);
  const handleOnChange = (event, value) => {
    setPageCurrent(value);
    setFilter({ page: value });
  };

  return (
    <>
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {showActionSuccess && <ActionSuccess messageAction={messageAction} />}
        {isLoaded && showModalDetailsPlan && (
          <DetailsPlan
            handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}
            detailsPlan={detailsPlan}
          />
        )}
        {showModalAddInspector && (
          <AddInspector
            handleShowModalAddInspectorToPlan={
              handleShowModalAddInspectorToPlan
            }
            planId={planId}
            handleShowSuccessAction={handleShowSuccessAction}
          />
        )}
        {showModalReport && (
          <ReportDocx
            handleShowMoDalReport={handleShowMoDalReport}
            planId={planId}
            handleShowSuccessAction={handleShowSuccessAction}
          />
        )}
        {showModalSubmitDocx && (
          <SubmitDocx
            handleShowModalSubmitDocx={handleShowModalSubmitDocx}
            planId={planId}
            handleShowSuccessAction={handleShowSuccessAction}
          />
        )}

        {showModalUpdatePlan && (
          <UpdatePlan
            handleShowModalUpdatePlan={handleShowModalUpdatePlan}
            time={time}
            planId={planId}
            fetchDataPlans={fetchDataPlans}
            handleShowSuccessAction={handleShowSuccessAction}
          />
        )}
        {showModalAddPlan && (
          <AddPlan
            handleShowModalAddPlan={handleShowModalAddPlan}
            fetchDataPlans={fetchDataPlans}
            handleShowSuccessAction={handleShowSuccessAction}
          />
        )}
        <div className="table-wrapper">
          {/* <RequireAuth role="admin"> */}
          <div className="planInspect-header">
            <h1>Plan Management</h1>
            {state.role === "Admin" && (
              <button
                className="btn-add-plan"
                onClick={() => {
                  setShowModalAddPlan(true);
                }}
              >
                Add Plan
              </button>
            )}
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <PlanRowElement
                      key={index}
                      index={index + 1 + (pageCurrent - 1) * 8}
                      {...item}
                      handleShowModalUpdatePlan={handleShowModalUpdatePlan}
                      handleShowMoDalReport={handleShowMoDalReport}
                      handleSetTimePlan={handleSetTimePlan}
                      handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}
                      handleSetPlanId={handleSetPlanId}
                      fetchDataPlans={fetchDataPlans}
                      handleShowSuccessAction={handleShowSuccessAction}
                      handleShowModalAddInspectorToPlan={
                        handleShowModalAddInspectorToPlan
                      }
                      setPlanId={setPlanId}
                      handleShowModalSubmitDocx={handleShowModalSubmitDocx}
                    ></PlanRowElement>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <Pagination
            count={pagination.totalPages}
            showFirstButton
            showLastButton
            onChange={handleOnChange}
          />
        </div>
      </>
    </>
  );
}

export default PlanInspect;
