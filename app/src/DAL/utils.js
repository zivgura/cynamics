const BOOKS_API_URL = '/api/books';

export async function getAllBooks() {
    const res = await fetch(BOOKS_API_URL);
    return await res.json();
}

export async function getBookById(id) {
    const res = await fetch(`${BOOKS_API_URL}/${id}`);
    return await res.json();
}