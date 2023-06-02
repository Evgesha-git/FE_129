import { combineReducers } from "redux";
import { organizeReducer } from "./organizeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    organize: organizeReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;