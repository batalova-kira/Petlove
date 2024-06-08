import styled from "styled-components";

export const StyledTitle = styled.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${(props) => props.color || props.theme.colors.black};

    @media only screen and (min-width: 768px) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`;
