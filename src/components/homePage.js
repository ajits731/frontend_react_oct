import { Outlet } from "react-router-dom";
import { GetUserDetails } from "../action/action";
import { useDispatch } from "react-redux";
const HomePage = () => {
    const dispatch = useDispatch();
    return (
        <>
            <h2>Home Page</h2>
            <button onClick={() => dispatch(GetUserDetails())} >Get User Details</button>
            <Outlet />
        </>
    )
}

export default HomePage;