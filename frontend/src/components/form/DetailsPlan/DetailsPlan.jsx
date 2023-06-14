import ClearIcon from "@mui/icons-material/Clear";
import "./DetailsPlan.css";
import { FaTimes } from "react-icons/fa";

import { ConvertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
function DetailsPlan(props) {
  return (
    <div className="details-plan-container">
      <div className="details-plan-content">
        <div className="details-plan-form">
          <h1>Details Plan</h1>
          <div className="x-icon">
            <FaTimes
              onClick={() => {
                props.handleShowMoDalDetailsPlan(false);
              }}
            />
          </div>
          <form action="">
            <div className="details-plan-infor">
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Tên công ty">Tên công ty</label>
                </div>

                <input
                  disabled
                  className="form-control"
                  type="text"
                  placeholder="Tên công ty"
                  value={props.detailsPlan.company.companyName}
                />
              </div>

              <div className="form-group">
                <div className="label">
                  <label htmlFor="Thời gian">Thời gian</label>
                </div>
                <input
                  disabled
                  className="form-control"
                  type="datetime-local"
                  value={ConvertTimestampToDate(props.detailsPlan.time)}
                />
              </div>

              <div className="form-group">
                <div className="label">
                  <label className="form-control" htmlFor="Status">
                    Status
                  </label>
                </div>
                <select name="" id="" value={props.detailsPlan.action} disabled>
                  <option value={1}>Active</option>
                  <option value={0}>Inactived</option>
                </select>
              </div>
            </div>
            <div className="details-plan-infor inspector">
              {props.detailsPlan.inspectors &&
                props.detailsPlan.inspectors.map((item, index) => {
                  return (
                    <div className="form-group" key={index}>
                      <div className="label">
                        <label htmlFor="">Tên thanh tra {index + 1}</label>
                      </div>
                      <div className="inspector-status">
                        <input className="form-control" type="text" />
                        <select name="" id="" value={item.action} disabled>
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
                        </select>
                        <button>Inactive</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </form>

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPlan;
