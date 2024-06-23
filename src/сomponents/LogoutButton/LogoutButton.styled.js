import styled from "styled-components";

export const StyledLogoutButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 30px;
    padding: 15px 35px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.yellow};
    }
`;
