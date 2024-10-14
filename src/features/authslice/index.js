import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
        localStorage.setItem("token","jwtToken")
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { setLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
