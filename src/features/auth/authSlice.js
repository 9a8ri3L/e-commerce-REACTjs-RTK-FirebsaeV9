import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { EncryptStorage } from "encrypt-storage";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { encryptedCart } from "../cart/cartSlice";
import { auth } from "../firebase/firebaseConfig";

export const encryptedUser = new EncryptStorage(
  process.env.REACT_APP_ENCRYPT_STORAGE,
  {
    prefix: "@_user"
  }
);

const user = encryptedUser.getItem("_info");

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async () => {
          await sendEmailVerification(auth.currentUser);
        }
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      if (user) {
        const userInfo = {
          email: user.email,
          isVerified: user.emailVerified,
          name: user.displayName,
          uid: user.uid,
          createdAt: user.metadata.creationTime,
          lastLogin: user.metadata.lastSignInTime,
          accessToken: user.stsTokenManager.accessToken,
          passwordHash: user.reloadUserInfo.passwordHash
        };

        user && encryptedUser.setItem("_info", userInfo);
        return userInfo;
      }
      // });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth)
    .then(() => {
      encryptedCart.removeItem("_bs");
    })
    .catch(error => {});
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUser: state => {
      (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false),
        (state.message = "");
    },
    removeUser: state => {
      state.user = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, state => {
        (state.isLoading = false), (state.isSuccess = true);
      })
      .addCase(register.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.user = null),
          (state.message = action.payload);
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.user = encryptedUser.getItem("_info");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        encryptedUser.removeItem("_info");
        state.user = null;
      });
  }
});
export const { resetUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
