import {BookPreviewContainer, BookDetailsContainer, BookTitleContainer, BookDetails, BookDescriptionContainer} from './BookPreview.style';

export function BookPreview({book}){
    const publicationDate = new Date(book?.publicationDate)?.toLocaleDateString('he') ?? '';
    return(
        <BookPreviewContainer>
            <img src={book?.coverUrl} alt={''} width={"100px"}/>
            <BookDetailsContainer>
                <BookTitleContainer>{book?.title}</BookTitleContainer>
                <BookDescriptionContainer>{book?.description}</BookDescriptionContainer>
                <BookDetails>
                    <section>Author: {book?.author}</section>
                    <section>Genre: {book?.genre}</section>
                    <section>Publication Date: {publicationDate}</section>
                    <section>Price: {book?.price}$</section>
                </BookDetails>
            </BookDetailsContainer>
        </BookPreviewContainer>
    )
};
