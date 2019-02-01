import React, { Component } from "react";
import Header from "./header";
import EmployeeDetails from "./employee-details";
import EmployeeLI from "./employee-li";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      details: null,
      employeeDetails: null
    };
  }

  componentDidMount() {
    const fetchURL = "http://10.206.4.215:3000/students";

    fetch(fetchURL)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            details: result,
            employeeDetails: null
          });

          this.setEmployeeDetails(
            result.filter(e => e.IsActive === true)[0].Id
          );
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  showDetails = (id, event) => {
    event.preventDefault();
    const updatedActiveList = this.state.details.map(item => {
      item.IsActive = item.Id === id;
      return item;
    });
    this.setState({ details: updatedActiveList });
    this.setState({
      employeeDetails: null
    });
    // Make an ajax call here to get the details and then set to properties.
    this.setEmployeeDetails(id);
  };

  setEmployeeDetails = id => {
    console.log(id);
    const fetchURL = `http://10.206.6.172:3000/students/${id}`;
    fetch(fetchURL)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          setTimeout(() => {
            this.setState({
              employeeDetails: result
            });
          }, 500);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            employeeDetails: null
          });
        }
      );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-4">
              <div className="list-group">
                <EmployeeLI
                  errorDetails={this.state.error}
                  isLoaded={this.state.isLoaded}
                  employees={this.state.details}
                  onEmployeeSelect={this.showDetails}
                />
              </div>
            </div>
            <div className="col-8 border p-3">
              <EmployeeDetails details={this.state.employeeDetails} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Employee;
