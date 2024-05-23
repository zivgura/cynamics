import styled from "styled-components";

export const BookModalContent = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 6px;
`;

export const BookTitleContainer = styled.div`
    display: flex;
    text-align: start;
    font-weight: 700;
    font-size: 32px;
    height: 30px;
    padding: 6px;
    align-items: center;
`;

export const BookDescriptionContainer = styled.div`
    display: flex;
    text-align: start;
    font-weight: 500;
    padding-bottom: 10px;
    flex-direction: column;
`;

export const BookDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    max-width: 260px;
`;

export const BookHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 6px;
`;

export const BookDetails = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 4px;
`;

export const BookInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;