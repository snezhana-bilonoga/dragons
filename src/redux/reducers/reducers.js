import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { rocketReducer } from "./rocketReducer";
import { rocketsReducer } from "./rocketsReducer";

const reducers = combineReducers({
    app: appReducer,
    rocket: rocketReducer,
    rockets: rocketsReducer,
    auth: authReducer
})

export default reducers;