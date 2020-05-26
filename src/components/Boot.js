import React, { useState, useEffect } from "react";
const Boot = (props) => {
  let _fields = props.fields.map((data) => {
    return data.header_name;
  });
  let _field_data = props.fields.map((data) => {
    return data.link;
  });
  const [_data, _setData] = useState([]);
  const [search, setSearch] = useState({
    text: "",
    field: _field_data[1],
    searchConditionField: "starts with",
  });
  const [_add, _setAdd] = useState(false);
  const [_newRowData, _setNewRowData] = useState({});
  const [_dataCopy, _setDataCopy] = useState();

  useEffect(() => {
    _setData(props.st_data);
    _setDataCopy(props.st_data);
  }, []);
  const searchHandler = (e) => {
    if (e.target.name == "field") {
      let _header_name = "";
      props.fields.map((data) => {
        if (data.header_name == e.target.value) {
          _header_name = data.link;
          setSearch({ ...search, [e.target.name]: _header_name });
        }
      });
      return;
    }
    setSearch({ ...search, [e.target.name]: e.target.value.toLowerCase() });
  };

  const _newRowDataHandler = (e) => {
    _setNewRowData({ ..._newRowData, [e.target.name]: e.target.value });
  };
  const searchSubmit = () => {
    let d = [];
    if (search.searchConditionField == "equals") {
      d = (_data || []).filter(
        (data) =>
          (data[search.field] || "").toLowerCase() === search.text.toLowerCase()
      );
    } else if (search.searchConditionField == "starts with") {
      _data.map((data) => {
        if (
          (data[search.field] || "")
            .toLowerCase()
            .startsWith(search.text.toLowerCase()) === true
        ) {
          d.push(data);
        }
      });
    } else {
      _data.map((data) => {
        if (
          (data[search.field] || "")
            .toLowerCase()
            .includes(search.text.toLowerCase()) === true
        ) {
          d.push(data);
        }
      });
    }
    _setData(d || []);
  };

  const clearSubmit = () => {
    _setData(_dataCopy);
    _setAdd(false);
  };

  const add = () => {
    if (_add === true) {
      console.log(_newRowData);
      _setData([..._data, _newRowData]);
      _setNewRowData({});
    }
    _setAdd(!_add);
  };
  const _selectedCheckBoxId = [];
  const _checkboxHandler = (e) => {
    if (_selectedCheckBoxId.includes(e.target.name)) {
      for (var i = 0; i < _selectedCheckBoxId.length; i++) {
        if (_selectedCheckBoxId[i] === e.target.name) {
          _selectedCheckBoxId.splice(i, 1);
          break;
        }
      }
    } else {
      _selectedCheckBoxId.push(e.target.name);
    }
  };
  const _delete = () => {
    let newState = [];
    _data.map((data) => {
      if (_selectedCheckBoxId.includes(data.id.toString()) === false) {
        newState.push(data);
      }
    });
    _setData(newState);
    _setDataCopy(newState);
  };
  return (
    <div>
      <pre />
      <div className="form-row center-block" style={{ textAlign: "center" }}>
        <div className="col-sm-2 ">
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="Search"
            onChange={searchHandler}
          />
        </div>
        <div className="col-sm-3 ">
          <select
            className="form-control"
            onChange={searchHandler}
            name="field"
          >
            {_fields.slice(1).map((data, key) => {
              return <option key={key}>{data}</option>;
            })}
          </select>
        </div>
        <div className="col-sm-3 ">
          <select
            className="form-control"
            onChange={searchHandler}
            name="searchConditionField"
          >
            <option>Starts with</option>
            <option>Equals</option>
            <option>Contains</option>
          </select>
        </div>
        <div className="col-sm-1 ">
          <button className="btn btn-primary" onClick={searchSubmit}>
            Search
          </button>
        </div>
        <div className="col-sm-1 ">
          <button className="btn btn-primary" onClick={clearSubmit}>
            Clear
          </button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-primary" onClick={add}>
            Add
          </button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-primary" onClick={_delete}>
            Delete
          </button>
        </div>
      </div>
      <pre />

      <table className="table">
        <thead className="thead-dark">
          <tr>
            {(_fields || []).map((data, key) => {
              return <th key={key}>{data}</th>;
            })}
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {(_data || []).map((data) => {
            return (
              <tr key={data.id}>
                {(_field_data || []).map((field_data, _key) => {
                  return <td key={_key}>{data[field_data]}</td>;
                })}
                <td>
                  <input
                    key={data.id}
                    type="checkbox"
                    name={data.id}
                    onChange={_checkboxHandler}
                  />
                </td>
              </tr>
            );
          })}

          {_add ? (
            <tr>
              {_field_data.map((field, key) => {
                return (
                  <td key={key}>
                    <input
                      type="text"
                      name={field}
                      className="col-5"
                      onChange={_newRowDataHandler}
                    />
                  </td>
                );
              })}
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Boot;
