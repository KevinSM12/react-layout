import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import "./css/layout.css"

const layout = ()=>{
    const[menuOpen, setMenuOpen] = useState(false);
    
    const toggle = ()=>{
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <Header />

            <button onClick={toggle}>Toggle</button>

            <nav id="main-nav" class={menuOpen?"":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/picture">Picture</Link></li>
            </nav>

            <Outlet />

            <Footer />
        </>
    );
};

export default layout;