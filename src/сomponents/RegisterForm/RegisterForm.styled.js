import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints.js";

export const RegisterFormContainer = styled.div`
    padding: 27px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 30px 140px;

        width: 704px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        margin-right: -32px;
        padding: 77px 84px;

        width: 592px;
    }
`;
