const BOOKS_API_URL = '/api/books';
const CATALOG_API_URL = '/api/catalog';

export async function getAllBooks() {
    const res = await fetch(BOOKS_API_URL);
    return await res.json();
}

export async function getBookById(id) {
    const res = await fetch(`${BOOKS_API_URL}/${id}`);
    return await res.json();
}

export async function addBookToCatalog(id) {
    const res = await fetch(`${CATALOG_API_URL}/${id}`, {method: 'POST'});
    return await res.json();
}

export async function removeBookfromCatalog(id) {
    const res = await fetch(`${CATALOG_API_URL}/${id}`, {method: 'DELETE'});
    return await res.json();
}
