const initialRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

// Reducer state untuk REGISTER FLOW
export const registerReducer = (state = {initialRegister}, action) => {
  // Action untuk Flow Register awal
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }

  return state;
};
