import Utils from "../utilityLibrary/dev/utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: Utils.getUser(),
    loggedIn: Utils.loggedIn(),
    analytics: {},
    gettingAnalytics: true,
    loading: false,
    notifications: {},
    notificationError: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logIn: (state, action) => {
          state.user = action.payload
      },
      toggleRequestAnalytics: (state, action) => {
        state.gettingAnalytics = action.payload
      },
      saveAnalytics: (state, action) => {
        state.gettingAnalytics =  false;
        state.analytics = action.payload
      },
      getNotifications: (state, action) => {
        state.notifications = action.payload;
        state.loading = false;
      },
      toggleLoading: (state, action) => {
        state.notificationError = false;
        state.loading = action.payload;
      },
      getNotificationsFailed: (state) => {
        state.notificationError =  true;
        state.notifications = {}
      },
      toggleNotificationUpdate: (state) => {
        state.notificationUpdating = true;
        state.notificationUpated = false;
      },
      updateNotification:(state, action) => {
        state.notificationUpdated = action.payload;
        state.notificationUpdating = false;
      },
      updateNotificationFailed: (state) => {
        state.updateNotificationFailed = false;
      }
    },
  });
export const { logIn, toggleRequestAnalytics, saveAnalytics , getNotifications, toggleLoading, getNotificationsFailed, toggleNotificationUpdate, updateNotification, updateNotificationFailed } = userSlice.actions;
export default userSlice.reducer;