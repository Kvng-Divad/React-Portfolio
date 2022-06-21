import React from "react";
import Navbar from "../components/navbar/navbar";
import Heroimg from "../components/hero-section/heroimg";
import Footer from "../components/footer/footer";
import Work from "../components/works/work";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Heroimg />
            <Work />
            <Footer />
        </div>
    )
}

export default Home;