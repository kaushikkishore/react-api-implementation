import React, { Component } from "react";
import LoadingIcon from "./loading";

class EmployeeLI extends Component {
  render() {
    const { errorDetails, isLoaded, employees } = this.props;
    console.log("error", errorDetails);
    console.log("isLoaded", isLoaded);
    console.log("employees", employees);
    if (errorDetails) {
      return (
        <span className="border border-danger">
          Error: {errorDetails.message}
        </span>
      );
    } else if (!isLoaded) {
      return <LoadingIcon />;
    } else {
      return (
        <React.Fragment>
          {employees.map(employee => (
            <button
              key={employee.Id}
              onClick={e => this.props.onEmployeeSelect(employee.Id, e)}
              type="button"
              className={
                "list-group-item list-group-item-action " +
                (employee.IsActive === true ? "active" : "")
              }
            >
              {employee.Name}
            </button>
          ))}
        </React.Fragment>
      );
    }
  }
}

export default EmployeeLI;
