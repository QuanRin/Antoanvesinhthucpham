import { useContext, useState } from "react";
import { getAllCompaniesCurrent } from "../../../hooks/User/useGetAllCompanies";
import "./AddPlan.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useCreatePlan } from "../../../hooks/Plan/useCreatePlan";
import { ConvertToTimeStamp } from "../../../utils/ConvertToTimestamp";
import { StoreContext } from "~store";

function AddPlan(props) {
  const [state] = useContext(StoreContext);
  const { dataCompanies, errorCompanies } = getAllCompaniesCurrent();
  const [formAddNewPlan, setFormAddNewPlan] = useState({});
  const {
    successAddNewPlan,
    messageAddNewPlan,
    errorAddNewPlan,
    executeAddPlan,
  } = useCreatePlan();
  const handleAddNewPlan = async (e) => {
    e.preventDefault();
    await executeAddPlan(formAddNewPlan, state.id, state.token);
    await props.fetchDataPlans();
    await props.handleShowModalAddPlan(false);
    await props.handleShowSuccessAction("Added New Plan");
  };

  return (
    <div className="AddPlan-container">
      <div className="AddPlan-content">
        <h1>Add Plan</h1>
        <div className="x-icon">
          <ClearIcon
            onClick={() => {
              props.handleShowModalAddPlan(false);
            }}
          />
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="Chọn cửa hàng">Chọn cửa hàng : </label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setFormAddNewPlan({
                  ...formAddNewPlan,
                  companyId: e.target.value,
                });
              }}
            >
              <option value="" disabled selected>
                --Store--
              </option>
              {dataCompanies.map((item, index) => {
                return (
                  <option key={index} value={item.companyId}>
                    {item.companyName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Chọn thời gian">Chọn thời gian :</label>
            <input
              type="datetime-local"
              onChange={(e) => {
                setFormAddNewPlan({
                  ...formAddNewPlan,
                  time: ConvertToTimeStamp(e.target.value),
                });
              }}
            />
          </div>
        </form>
        <button onClick={handleAddNewPlan}>Submit</button>
      </div>
    </div>
  );
}

export default AddPlan;
