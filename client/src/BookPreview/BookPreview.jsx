import { useState } from 'react';
import { BookPreviewContainer, BookDetailsContainer, BookTitleContainer, BookDetails, BookHeader, BookDescriptionContainer} from './BookPreview.style';
import {FavoriteStar} from '../FavoriteStar/FavoriteStar';
import { BookModal } from '../BookModal/BookModal';


export function BookPreview({book, onFavoriteClick, children, isSelected = false}){
    const [isFavorite, setIsFavorite] = useState(isSelected);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleFavoriteClick(){
        setIsFavorite(oldState => !oldState);
        onFavoriteClick(book?.id, isFavorite)
    }

    function handleBookClick(e){
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }

    return(
        <BookPreviewContainer 
            onClick={book ? handleBookClick : ()=>{}}
            hasBook={!!book}
        >
            {book ? (
            <>
                <img src={book?.coverUrl} alt={''} width={"150px"}/>
                <BookDetailsContainer>
                            <BookHeader>
                                <BookTitleContainer>{book?.title}</BookTitleContainer>
                                <BookDescriptionContainer>{book?.description}</BookDescriptionContainer>
                            </BookHeader>
                            <BookDetails>
                                <section>Price: {book?.price}$</section>
                            </BookDetails>
                        
                </BookDetailsContainer>
            </>)
                : children
            }
            {onFavoriteClick ?
             <FavoriteStar onClick={handleFavoriteClick} isFavorite={isFavorite}/>
             : null
            }
            {isModalOpen ? 
                <BookModal isOpen={isModalOpen} book={book} onClose={handleBookClick}/>
                : null    
            }
        </BookPreviewContainer>
    )
};
