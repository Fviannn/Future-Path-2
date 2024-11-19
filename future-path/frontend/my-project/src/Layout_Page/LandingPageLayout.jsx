import React from "react";
import Footer from "../layout/Footer";

const LandingPageLayout = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default LandingPageLayout;
