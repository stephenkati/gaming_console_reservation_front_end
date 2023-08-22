import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customApi from "../utils/axios";
import { saveToken } from "../utils/localStorage";

const makeApiCall = async (endpoint, user, thunkAPI) => {
  try {
    const response = await customApi.post(endpoint, user);

    const data = await response.data;

    // const token = response.headers['authorization'];
    const headers = response.headers;
    const accessToken = headers.get('access-token');
    const client = headers.get('client');
    const uid = headers.get('uid');
    const expiry = headers.get('expiry');
    const tokenType = headers.get('token-type');
    const authorizationToken = headers.get('authorization')
    const token = {
      'access-token': accessToken,
      'client': client,
      'uid': uid,
      'expiry': expiry,
      'token-type': tokenType,
      'authorization': authorizationToken,
    }
    if (response.status === 201 || response.status === 200) {
      saveToken(token)
      return { user: data };
    }

  } catch (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 422)) {
      return thunkAPI.rejectWithValue(error.response.data.errors[0]);
    }
    return thunkAPI.rejectWithValue(error.response?.data.errors || "Unknown error");
  }
};

const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => makeApiCall('/auth', user, thunkAPI)
);

const logInUser = createAsyncThunk(
  'user/logInUser',
  async (user, thunkAPI) => makeApiCall('/auth/sign_in', user, thunkAPI)
);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user.data;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export { registerUser, logInUser };
export default userSlice.reducer;
