import styled from "styled-components";

export const ContainerNewsCards = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
    }
`;
