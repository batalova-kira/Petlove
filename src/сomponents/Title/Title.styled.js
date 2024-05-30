import styled from "styled-components";

export const StyledTitle = styled.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${(props) => props.color || props.theme.colors.black};
`;
