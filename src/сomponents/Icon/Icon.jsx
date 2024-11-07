import React from "react";

const spriteURL = "/petlove/sprite.svg";

export const Icon = ({ name, width, height, viewBox }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid meet"
        >
            <use href={`${spriteURL}#${name}`}></use>
        </svg>
    );
};

export default Icon;
