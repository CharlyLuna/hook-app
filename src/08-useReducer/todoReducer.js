export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("action.type = ABC is not implemented");
    default:
      return initialState;
  }
};
