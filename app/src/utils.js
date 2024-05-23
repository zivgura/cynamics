import {getAllBooks} from './DAL/utils'

export async function getBooks() {
    return await getAllBooks();
}

export function sortByTitle(a,b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
}