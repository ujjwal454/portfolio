const initialState = {
  darkMode: false,
  text: "Light Mode",
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "darkMode":
      return {
        ...state,
        darkMode: true,
        text: "Dark Mode",
      };
    case "lightMode":
      return {
        ...state,
        darkMode: false,
        text: "Light Mode",
      };
    default:
      return state;
  }
};
