const initialState = [];
const formData = [];
const reducer = (cs = initialState, action) => {
  if (action.type === "add") {
    let newState = [...cs];
    formData.push(action.userData);
    newState.push(action.userData);
    cs = newState;

    // cs.push(action.text);
  } else {
    let newState = action.userData;
    cs = newState;
    // cs = [
    //   { id: 1, name: "Guhan" },
    //   { id: 2, name: "Ram" },
    // ];
  }
  console.log("[Reducer]", cs);
  return cs;
};

export default reducer;
