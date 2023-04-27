import { Outlet } from "react-router-dom";
const HomePage = () => {
    return (
        <>
            <h2>Home Page</h2>
            <Outlet />
        </>
    )
}

export default HomePage;