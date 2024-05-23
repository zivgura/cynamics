import styled from "styled-components";

export const FavoriteStarContainer = styled.div`
    svg {
        position: relative;
        width: 30px;
        height: 30px;
        :hover {
            background-color: #00000099;
        }
    }
    svg.selected{
        color: #f4bb20;
        :hover {
            color: #f4bb20a3;
        }
    }
`;