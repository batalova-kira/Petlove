import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const UserModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserModalTitle = styled.h2`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 20px;
    line-height: 1;

    color: ${(props) => props.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const UserModalAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    overflow: hidden;

    width: 80px;
    height: 80px;
    border-radius: 50%;

    /* color: ${(props) => props.theme.colors.secondaryBlack}; */

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const WrapperUserModalAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

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

export const WrapperUserLoadPhoto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const InputUrlPhoto = styled.input`
    border: 1px solid #f6b83d;
    border-radius: 30px;
    padding: 13px 39px 13px 12px;
    width: 161px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 12px;

    line-height: 1.33;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    &::placeholder {
        font-size: 12px;
        color: ${(props) => props.theme.colors.lightGrey};
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const BtnUploadPhotoTitle = styled.span`
    font-size: 12px;

    line-height: 1.33;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const BtnUploadPhoto = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    border-radius: 30px;
    padding: 12px;

    color: ${(props) => props.theme.colors.yellow};
    background: ${(props) => props.theme.colors.lightYellow};
    border: 1px solid transparent;

    svg {
        width: 18px;
        height: 18px;
        color: inherit;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;
