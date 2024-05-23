const BOOKS_API_URL = '/api/books';

export async function getAllBooks() {
    const res = await fetch(BOOKS_API_URL);
    return await res.json();
}

