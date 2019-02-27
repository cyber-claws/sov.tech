import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <Link to={`/fact/${props.catName}`}>
            <div className="category col-4">
                <h4>{props.catName}</h4>
            </div>
        </Link>
    )
}