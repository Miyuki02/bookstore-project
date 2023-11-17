<template>
  <div class="index-container">
    <SideBar />

    <section class="home">
      <!-- main -->
      <div class="main">
        <!-- search bar -->
        <Search v-model="searchText" />
        <!-- main menus / order -->
        <div class="main-menus">

          <!-- List of books -->
          <div class="main-product">
            <h2 class="main-title">Chọn sách</h2>
            <button @click="goToAddBook">
          <i></i> Thêm mới
        </button>
            <!-- product wrapper -->
            <div class="product-wrapper">
              <div
                v-for="book in searchedBooks"
                :key="book.id"
                class="product-list"
                @click="() => goToEditBook(book)"
              >
                <router-link
                  :to="{
                    name: 'book.edit',
                    params: { id: book.id },
                  }"
                ></router-link>
                <img class="product-img" :src="book.imageUrl" />
                <div class="product-desc">
                  <div class="product-name">
                    <h4>{{ book.name }}</h4>
                    <p class="price">{{ book.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination component -->
          <Pagination
            :totalPages="totalPages"
            :currentPage="currentPage"
            :length="length"
            @update:currentPage="handlePageChange"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
// attach sidebar into shopIndex
import SideBar from '@/components/SideBar.vue'
import Pagination from '@/components/Pagination.vue'
import Search from '@/components/SearchBar.vue'

import booksService from '@/services/books.service'

const books = [
  {
    id: 1,
    imageUrl: 'book1.png',
    name: 'Book 1',
    price: '99.000đ'
  },
  {
    id: 2,
    imageUrl: 'book2.png',
    name: 'Book 2',
    price: '99.000đ'
  },
  {
    id: 3,
    imageUrl: 'book3.png',
    name: 'Book 3',
    price: '99.000đ'
  },
  {
    id: 4,
    imageUrl: 'book4.png',
    name: 'Book 4',
    price: '99.000đ'
  },
  {
    id: 5,
    imageUrl: 'book5.png',
    name: 'Book 5',
    price: '99.000đ'
  },
  {
    id: 6,
    imageUrl: 'book6.png',
    name: 'Book 6',
    price: '99.000đ'
  },
  {
    id: 7,
    imageUrl: 'book7.png',
    name: 'Book 7',
    price: '99.000đ'
  },
  {
    id: 8,
    imageUrl: 'book8.png',
    name: 'Book 8',
    price: '99.000đ'
  },
  {
    id: 9,
    imageUrl: 'book9.png',
    name: 'Book 9',
    price: '99.000đ'
  },
  {
    id: 10,
    imageUrl: 'book10.png',
    name: 'Book 10',
    price: '99.000đ'
  },
  {
    id: 11,
    imageUrl: 'book11.png',
    name: 'Book 11',
    price: '99.000đ'
  },
  {
    id: 12,
    imageUrl: 'book12.png',
    name: 'Book 12',
    price: '99.000đ'
  }
]

// Define the variables with `ref` if they're reactive
const currentPage = ref(1)
const totalPages = 10
const length = 5
const productsPerPage = 8
const searchText = ref('')

// Comnputed
const searchedBooks = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage
  const end = start + productsPerPage
  const searchWords = searchText.value.toLowerCase().split(' ')

  const filteredBooks = books.filter((book) => {
    return searchWords.every((word) => book.name.toLowerCase().includes(word))
  })

  return filteredBooks.slice(start, end)
})

// Method
const handlePageChange = (newPage) => {
  currentPage.value = newPage
}

const $router = useRouter();

const goToEditBook = (book) => {
  $router.push({
    name: 'book.edit',
    params: { id: book.id },
    query: { book: JSON.stringify(book) }
  })
}

function goToAddBook() {
  $router.push({ name: "book.add" });
}

async function retrieveBooks() {
  try {
    const { books, metadata } = await booksService.getBooks(currentPage.value, productsPerPage);
    totalPages.value = metadata.lastPage ?? 1;
    searchedBooks.value = books;
  } catch (error) {
    console.error('Error retrieving books:', error);

    // Handle the error, e.g., redirect to an error page or display a message
  }
}


// When this component is mounted, load the first page of contacts
onMounted(() => retrieveBooks(1));

// When currentPage changes, fetch contacts for currentPage
watchEffect(() => retrieveBooks(currentPage.value));

</script>

<style>
html {
  scroll-behavior: smooth;
}
:root {
  --primaryColor: #96c93e;
  --secondaryColor: #ffc107;
  --whiteColor: #fff;
  --blackColor: #222;
  --softGreenColor: #d9f2ee;
  --darkGreyColor: #a7a7a7;
  --greyColor: #f5f5f5;
}
.index-container {
  width: 100%;
  height: auto;
  display: flex;
}
.main {
  width: 100%;
  height: max-content;
  min-height: 100vh;
  padding: 2%;
  background-color: var(--softGreenColor);
}

.main-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--whiteColor);
  font-size: 20px;
  color: var(--primaryColor);
  text-decoration: none;
  padding: 0 10px;
  height: 40px;
  border-radius: 50%;
}
.cart:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.main-highlight {
  margin: 3% 0;
  padding: 2%;
  background-color: var(--secondaryColor);
  border-radius: 8px;
}

.main-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.main-title {
  font-size: 20px;
}

.back,
.next {
  cursor: pointer;
}

.back:hover,
.next:hover {
  color: var(--primaryColor);
}

.main-menus {
  min-height: 100%;
  height: 100%;
  background-color: var(--greyColor);
  padding: 2%;
  border-radius: 8px;
  margin-top: 20px;
}

.main-product {
  margin: 1rem 0 1.5rem 0;
}

.product-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  margin-top: 1rem;
  gap: 1%;
  border-radius: 8px;
}

.product-list {
  min-height: auto;
  height: 100%;
  background-color: var(--whiteColor);
  border-radius: 8px;
  margin: 1% 0;
  box-shadow: rgba(176, 176, 176, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transform: translateY(20px);
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.product-list:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0 px 8px 24px;
  opacity: 1;
  transform: translateY(0);
}
.product-img {
  width: 100%;
  height: auto;
  min-height: 430px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
}
.product-desc {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
  width: 100%;
}
.price {
  color: var(--primaryColor);
}
.product-list:hover .product-img {
  filter: opacity(1);
}

.product-list:hover .product-name h4 {
  color: var(--primaryColor);
}

.product-list:hover .price {
  letter-spacing: 1.5px;
}
body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--primaryColor);
  outline: 1px solid var(--primaryColor);
}
.home {
  height: 100vh;
  width: calc(100% - 240px);
  position: relative;
  left: 240px;
  background: var(--body-color);
  transition: var(--tran-05);
}
.sidebar.close ~ .home {
  width: calc(100% - 88px);
  left: 88px;
}
</style>
