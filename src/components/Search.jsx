import PropTypes from "prop-types";
import React from "react";

const Search = ({ title }) => {
    return <h2>{title ? title : "No title"}</h2>;
};

Search.propTypes = {
    title: PropTypes.string
};

export default Search;
