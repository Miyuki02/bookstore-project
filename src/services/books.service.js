function makeBooksService() {
  const baseUrl = '/api/products'
  const headers = {
    'Content-Type': 'application/json'
  }
  // CREATE
  async function createBook(book) {
    return await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(book)
    }).then((res) => res.json())
  }
  //  UPDATE
  async function updateBook(id, book) {
    return await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(book)
    }).then((res) => res.json())
  }

  // GET
  async function getBook(id) {
    return await fetch(`${baseUrl}/${id}`).then((res) => res.json())
  }
  async function getBooks(page, limit = 8) {
    let url = `${baseUrl}?page=${page}&limit=${limit}`
    return await fetch(url).then((res) => {
      const data = res.json()
      // console.log(data)
      return data
    })
  }

  // DETELE
  async function deleteBook(id) {
    return await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json())
  }
  async function deleteAllBooks() {
    return await fetch(baseUrl, {
      method: 'DELETE'
    }).then((res) => res.json())
  }
  return {
    getBook,
    getBooks,
    deleteBook,
    deleteAllBooks,
    createBook,
    updateBook
  }
}

export default makeBooksService()
