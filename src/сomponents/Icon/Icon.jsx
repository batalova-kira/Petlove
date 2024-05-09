import React from "react";
const spriteURL = "../../assets/icons.svg";

const Icon = ({ name, width, height }) => {
    return (
        <svg width={width} height={height}>
            <use href={`${spriteURL}#${name}`}></use>
        </svg>
    );
};

export default Icon;
