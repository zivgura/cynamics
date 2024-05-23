import styled from 'styled-components';

export const AppHeader = styled.div`
    display: flex;
    font-size: 40px;
    padding: 10px;
`;

export const AppContainer = styled.div`
    display: flex;
`;

export const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    min-width: 500px;
`;

export const BookscContainerHeader = styled.div`
    font-size: 24px;
`;

export const EmptyCatalogTitle = styled.div`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    padding: 10px;
    p {
        display: flex;
        justify-content: center;
        img {
            padding: 0 4px;
        }
    }
`;