import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='title'>404</h1>
            <Link to='/' style={{ display: "block", marginTop: "30px" }}>
                {"<< Home"}
            </Link>
        </div>
    );
};

export default NotFound;
