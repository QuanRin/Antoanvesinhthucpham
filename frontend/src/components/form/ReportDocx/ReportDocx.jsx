import React, { useContext, useEffect } from "react";
import "./ReportDocx.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useGetPlanDocx } from "../../../hooks/Plan/useGetPlanDocx";
import { StoreContext } from "~store";
const ReportDocx = (props) => {
  const [state] = useContext(StoreContext);
  const [path, setPath] = useState("");
  const {
    dataGetPlanDocx,
    successGetPlanDocx,
    messageGetPlanDocx,
    errorGetPlanDocx,
    executeGetDocxPlan,
  } = useGetPlanDocx();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    executeGetDocxPlan(props.planId, state.id, state.token);
  }, []);
  useEffect(() => {
    if (successGetPlanDocx === true) {
      setPath(dataGetPlanDocx.path);
      setIsLoaded(true);
      console.log(dataGetPlanDocx.path);
    }
  }, [dataGetPlanDocx, successGetPlanDocx]);
  return (
    <div className="report-docx-container">
      <div className="report-docx-content">
        <div className="header-report-docx">
          <h1>Report</h1>
          <button
            className="btn"
            onClick={() => {
              props.handleShowMoDalReport(false);
            }}
          >
            <FaTimes />
          </button>
        </div>
        {isLoaded === false && <h3>Nothing to show</h3>}
        {isLoaded && (
          <iframe
            src={
              "https://ntphtdn-my.sharepoint.com/:w:/g/personal/minhngoc_40303_onedrive_iesschool_edu_vn/" +
              path +
              "?rtime=STqemrxL20g&action=embedview"
            }
            width="100%"
            height="550px"
            title="Report"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ReportDocx;
