import styled from 'styled-components';

export const BookPreviewContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 400px;
    padding: 10px;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

export const BookTitleContainer = styled.div`
    display: flex;
    text-align: start;
    font-weight: 700;
`;

export const BookDescriptionContainer = styled.div`
    display: flex;
    text-align: start;
    font-weight: 500;
    padding-bottom: 10px;
`;

export const BookDetailsContainer = styled.div`
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