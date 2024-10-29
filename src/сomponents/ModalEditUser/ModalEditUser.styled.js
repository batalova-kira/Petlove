import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const WrapperUserModalAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;

    background: ${(props) => props.theme.colors.lightYellow};

    svg {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;
