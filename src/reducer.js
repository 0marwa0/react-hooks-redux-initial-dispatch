let state = { count: 0 };

function changeState(state={count:0}, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}
dispatch({ type: "@@INIT" }); 
function render() {
  document.body.textContent = state.count;
}
