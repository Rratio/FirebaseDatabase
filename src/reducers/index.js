import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeReducers from "./EmployeeReducers";
import EmployeeFetch from "./EmployeeFetch";

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducers,
  employees: EmployeeFetch
});
