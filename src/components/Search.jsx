import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Search = ({ title }) => {
    return (
        <section>
            <h2>{title ? title : "No title"}</h2>
            <Link to='/' style={{ display: "block", marginTop: "30px" }}>
                {"<< Go Back"}
            </Link>
        </section>
    );
};

Search.propTypes = {
    title: PropTypes.string
};

export default Search;
