import {getAllBooks} from './DAL/utils'

export async function getBooks() {
    return await getAllBooks();
}