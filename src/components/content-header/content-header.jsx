import React from "react";
import img from "../img/photo.jpeg";
import "./content-header.css";

const ContentHeader = () => {
    return (
        <div className="header-content">
            <img className="header-content__photo" src={img} alt="candidate" />
            <h1 className="header-content__title">Osipenko Denis</h1>
            <p className="header-content__subtitle">FrontEnd Developer(Trainee/Junior)</p>
        </div>
    );
};
export default ContentHeader;