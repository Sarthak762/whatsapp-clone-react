export const initaialState = {
  user: null,
};

export const actions = {
  SET_USER: "set user",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
