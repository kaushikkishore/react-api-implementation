import React, { Component } from "react";
import LoadingIcon from "./loading";
import BoldSpan from "./bold-span";

class EmployeeDetails extends Component {
  render() {
    const employee = this.props.details;
    if (employee && employee.length > 0) {
      const {
        Id,
        Name,
        Age,
        FathersName,
        MothersName,
        Department,
        Location
      } = employee[0];
      return (
        <React.Fragment>
          <div className="p-3 mb-2 bg-light text-dark border">
            ID - <BoldSpan text={Id} />
          </div>
          <div className="p-3 mb-2 bg-light text-dark border">
            Name - <BoldSpan text={Name} />
          </div>

          <div className="p-3 mb-2 bg-light text-dark border">
            Experience - <BoldSpan text={Age + " years"} />
          </div>
          <div className="p-3 mb-2 bg-light text-dark border">
            Fathers Name - <BoldSpan text={FathersName} />
          </div>

          <div className="p-3 mb-2 bg-light text-dark border">
            Mothers Name - <BoldSpan text={MothersName} />
          </div>

          <div className="p-3 mb-2 bg-light text-dark border">
            Department - <BoldSpan text={Department} />
          </div>

          <div className="p-3 mb-2 bg-light text-dark border">
            Location - <BoldSpan text={Location} />
          </div>
        </React.Fragment>
      );
    } else {
      return <LoadingIcon />;
    }
  }
}

export default EmployeeDetails;
