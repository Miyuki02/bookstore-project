<template>
  <div class="index-container">
    <SideBar />

    <section class="home">
      <!-- main -->
      <div class="main">
        <!-- search bar -->
        <Search />
        <!-- main menus / order -->
        <div class="main-menus">
          <!-- filter section -->
          <div class="main-filter">
            <div>
              <h2 class="main-title">Books <br />Category</h2>
            </div>
            <!-- Books category -->
            <div class="filter-wrapper">
              <div v-for="filter in filters" :key="filter.id" class="filter-card">
                <div class="filter-icon">
                  <i :class="filter.iconName"></i>
                </div>
                <p>{{ filter.name }}</p>
              </div>
            </div>
          </div>
          <hr class="divider" />
          <!-- List of books -->
          <div class="main-product">
            <h2 class="main-title">Chọn sách</h2>
            <!-- product wrapper -->
            <div class="product-wrapper">
              <div v-for="book in displayedProducts" :key="book.id" class="product-list">
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

<script>
// attach sidebar into shopIndex
import SideBar from '@/components/SideBar.vue'
import Pagination from '@/components/Pagination.vue'
import Search from '@/components/SearchBar.vue'

export default {
  name: 'home',
  components: {
    Pagination,
    Search,
    SideBar
  },
  data() {
    return {
      filters: [
        {
          id: 1,
          iconName: 'bx bx-book',
          name: 'All'
        },
        {
          id: 2,
          iconName: 'bx bx-target-lock',
          name: 'Action'
        },
        {
          id: 3,
          iconName: 'bx bx-briefcase-alt',
          name: 'Business'
        },
        {
          id: 4,
          iconName: 'bx bx-bowl-hot',
          name: 'Cooking'
        },
        {
          id: 5,
          iconName: 'bx bx-laugh',
          name: 'Humor'
        },
        {
          id: 6,
          iconName: 'bx bxs-hourglass',
          name: 'History'
        },
        {
          id: 7,
          iconName: 'bx bx-ghost',
          name: 'Horror'
        },
        {
          id: 8,
          iconName: 'bx bxs-capsule',
          name: 'Medical'
        }
      ],
      books: [
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
      ],
      highlights: [
        {
          id: 1,
          imgUrl: 'book1.png',
          name: 'Sự im lặng của bầy cừu',
          price: '99.000đ'
        },
        {
          id: 2,
          imgUrl: 'book2.png',
          name: 'Tôi thấy hoa vàng trên cỏ xanh',
          price: '99.000đ'
        },
        {
          id: 3,
          imgUrl: 'book3.png',
          name: 'Abcdefg',
          price: '99.000đ'
        },
        {
          id: 4,
          imgUrl: 'book4.png',
          name: 'ÁĐAsadsađâsđâs',
          price: '99.000đ'
        }
      ],
      currentPage: 1, // Initialize with the current page
      totalPages: 10, // Set the total number of pages
      length: 5, // Set page length
      productsPerPage: 8 // Number of products per page
    }
  },
  computed: {
    displayedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage
      const end = start + this.productsPerPage
      return this.books.slice(start, end)
    }
  },
  methods: {
    // Handle the page change event and update the currentPage data property
    handlePageChange(newPage) {
      this.currentPage = newPage
    }
  },
  mounted() {
    // This code will run after the component is mounted to the DOM
    // You can manipulate the DOM here
    let inputBox = document.querySelector('.input-box'),
      search = document.querySelector('.search'),
      closeIcon = document.querySelector('.close-icon')

    search.addEventListener('click', () => inputBox.classList.add('open'))
    closeIcon.addEventListener('click', () => inputBox.classList.remove('open'))
  }
}
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

.main-filter {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

.filter-wrapper {
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  width: 100%;
  height: 100px;
  gap: 1.2rem;
}

.filter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 80px;
  height: 100%;
  background-color: var(--whiteColor);
  color: var(--blackColor);
  border-radius: 8px;
  border: 1px solid --softGreenColor;
  font-size: 14px;
  cursor: pointer;
}

.filter-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
  font-size: 30px;
  background-color: var(--softGreenColor);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.filter-card:hover {
  background-color: var(--primaryColor);
  color: var(--whiteColor);
}

.filter-card:hover .filter-icon {
  background-color: var(--whiteColor);
  color: var(--primaryColor);
}

.divider {
  margin: 1rem 0;
  height: 2px;
  width: 100%;
  background-color: var(--primaryColor);
  border: none;
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
