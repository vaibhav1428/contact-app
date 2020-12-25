import { combineReducers } from "redux";
import { contactreducer } from "./contactreducer";



export default combineReducers({
    contacts:contactreducer,
})