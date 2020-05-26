import React, { useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { connect } from "react-redux";

function MaterialTableDemo(props) {
  const [state, setState] = React.useState({});

  useEffect(() => {
    console.log("[useeffect]");
    setState({
      columns: [
        { title: "Name", field: "name" },
        { title: "Username", field: "username" },
        { title: "Email", field: "email" },
        { title: "Phone", field: "phone" },
        { title: "City", field: "address.city" },
        { title: "Website", field: "website" },
      ],
      data: props.data,
    });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => {
    //     console.log(data.data);
    //     props.add(data.data);
    //     setState({
    //       columns: [
    //         { title: "Name", field: "name" },
    //         { title: "Username", field: "username" },
    //         { title: "Email", field: "email" },
    //         { title: "Phone", field: "phone" },
    //         { title: "City", field: "address.city" },
    //         { title: "Website", field: "website" },
    //       ],
    //       data: [...data.data],
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <MaterialTable title="Table" columns={state.columns} data={props.data} />
  );
}

const mapStateToProps = (state) => {
  console.log("[mapStateTOPropsInTable]", state);

  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (userData) => {
      dispatch({
        type: "addMultiple",
        userData: userData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTableDemo);
