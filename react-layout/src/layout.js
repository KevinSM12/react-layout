import { Outlet, Link } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"

const layout = ()=>{
    return (
        <>
            <Header />

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/picture">Picture</Link>

            <Outlet />

            <Footer />
        </>
    );
};

export default layout;