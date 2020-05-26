import React, { useState } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const formDataHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="container">
        <h1>Form</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card card-outline-secondary">
              <div className="card-header">
                <h3 className="mb-0">User Information</h3>
              </div>
              <div className="card-body">
                <form autocomplete="off" className="form" role="form">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Name
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        onChange={formDataHandler}
                        name="name"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Username
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        onChange={formDataHandler}
                        name="username"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Email
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="email"
                        onChange={formDataHandler}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Phone
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        onChange={formDataHandler}
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Website
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="url"
                        onChange={formDataHandler}
                        name="website"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      City
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="text"
                        onChange={formDataHandler}
                        name="city"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                      <input
                        className="btn btn-secondary"
                        type="reset"
                        value="Cancel"
                      />
                      <input
                        className="btn btn-primary"
                        type="button"
                        value="save"
                        onClick={props.add.bind(this, formData)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
let id = 11;
const mapStateToProps = (state) => {
  console.log("[mapStateTOPropsForm]", state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (userData) => {
      userData.id = uniqid();

      console.log("[FormDispatch]", userData);
      dispatch({
        type: "add",
        userData: userData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
