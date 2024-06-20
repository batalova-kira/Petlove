import styled from "styled-components";

export const RegisterFormContainer = styled.div`
    padding: 27px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${(props) => props.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 30px 140px;

        width: 704px;
    }
`;
