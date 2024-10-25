import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const ContainerUserCard = styled.div`
    width:100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: ${breakpoints.medium}) {
    
    }
`;

export const ContainerUserCardHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (min-width: ${breakpoints.medium}) {
    
    }
`;

export const WrapperUserBtn = styled.button`
display:flex;
flex-direction:row;
gap:4px;

padding: 10px 14px;
border-radius: 30px;

    color: ${(props) => props.theme.colors.secondBackground};
    background: ${(props) => props.theme.colors.yellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
    
    }
`;

export const TextIconUserCard = styled.p`
    font-weight: 500;
font-size: 14px;

line-height: 1.29;
letter-spacing: -0.02em;
`;

export const WrapperIconUserCard = styled.div`
    width:18px;
    height:18px;
    
    @media only screen and (min-width: ${breakpoints.medium}) {
    
    }
`;

export const WrapperEditUserBtn = styled.button`
display:flex;
align-items:center;

padding: 12px ;
border-radius: 50%;

    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};

    @media only screen and (min-width: ${breakpoints.medium}) {
    
    }
`;