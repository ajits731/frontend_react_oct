import { combineReducers } from "redux";
import ProductsReducer from "./productReducer";
import UserReducer from "./userReducer";

const reducer = combineReducers({
    product: ProductsReducer,
    user: UserReducer
});

export default reducer;