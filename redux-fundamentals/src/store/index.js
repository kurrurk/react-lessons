// import { legacy_createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { value:0, isCounterInvisible: false };
const initialAuthState = { isUserLoggedIn: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state,action) {
      state.value = state.value + action.payload;
    },
    setCounterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    }
  }  
});

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    logOut(state) {
      state.isUserLoggedIn = false;
    }
  }
});

// const counterReduser = (state = initialStyte, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.value + 1,
//       isCounterInvisible: false
//     }
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.value + action.step,
//       isCounterInvisible: false
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.value - 1,
//       isCounterInvisible: false
//     }
//   }
//   if (action.type === 'visibility') {
//     return {
//       counter: state.value,
//       isCounterInvisible: !state.isCounterInvisible
//     }
//   }
//   return state;
// };

// const store = legacy_createStore(counterReduser);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: userAuthSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const userAuthActions = userAuthSlice.actions;

export default store;