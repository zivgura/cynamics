import { Modal, Box } from '@mui/material'
import { BookModalContent, BookInfoContainer, BookTitleContainer, BookDescriptionContainer, BookDetails } from './BookModal.style';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    width: '700px',
  };

export function BookModal({book, onClose, isOpen}){
    const publicationDate = new Date(book?.publicationDate)?.toLocaleDateString('he') ?? '';

    return(
        <Modal
            open={isOpen}
            onClose={onClose}
            disableAutoFocus={true}
        >
            <Box sx={style}>
                <div>
                    <BookTitleContainer>{book?.title}</BookTitleContainer>
                    <hr/>
                    <BookModalContent>
                        <img src={book?.coverUrl} alt={''} />
                        <BookInfoContainer>
                        <BookDescriptionContainer>
                            <h3>About the book:</h3>
                            {book?.description}
                        </BookDescriptionContainer>
                        <BookDetails>
                            <section>Author: {book?.author}</section>
                            <section>Genre: {book?.genre}</section>
                            <section>Publication Date: {publicationDate}</section>
                            <section>Price: {book?.price}$</section>
                        </BookDetails>
                        </BookInfoContainer>
                    </BookModalContent>
                </div>
            </Box>
        </Modal>
    )
}