import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";

export default configureStore({
  reducer: {
    darkTheme: themeSlice,
  },
});
