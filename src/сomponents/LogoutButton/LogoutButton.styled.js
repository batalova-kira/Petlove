import styled from "styled-components";

export const StyledLogoutButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 0;

    border-radius: 30px;
    border: ${({ $isHomePage, theme }) =>
        $isHomePage
            ? `1px solid ${theme.colors.accentWhite}`
            : `1px solid ${theme.colors.borderWhite}`};

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    white-space: nowrap;
    /* text-align: center; */

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.lightYellow};
        color: ${(props) => props.theme.colors.yellow};
    }

    @media only screen and (min-width: 768px) {
        width: auto;
        padding: 15px 35px;
        font-size: 16px;
        line-height: 1.25;
    }
`;
