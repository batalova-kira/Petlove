import React from "react";
import { StyledTitle } from "./Title.styled";

export const Title = ({ text, color }) => {
    return <StyledTitle color={color}>{text}</StyledTitle>;
};
