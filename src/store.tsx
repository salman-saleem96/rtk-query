import { configureStore } from "@reduxjs/toolkit";
import { CommentApi } from "./services/CommmentApi";

export const store = configureStore({
  reducer: {
    [CommentApi.reducerPath]: CommentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CommentApi.middleware),
});
