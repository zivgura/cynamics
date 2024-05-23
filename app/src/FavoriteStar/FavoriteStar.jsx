import {ReactComponent as FavoriteLogo} from '../assets/star.svg';
import {ReactComponent as FullFavoriteLogo} from '../assets/full-star.svg';
import { FavoriteStarContainer } from './FavoriteStar.style';

export function FavoriteStar({isFavorite, onClick}){
    return(
        <FavoriteStarContainer>
            {isFavorite ?
                <FullFavoriteLogo onClick={onClick} className='selected'/>
                :<FavoriteLogo onClick={onClick} />
            }
        </FavoriteStarContainer>
    )
}