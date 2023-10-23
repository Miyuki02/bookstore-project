<template>
  <div class="index-container">
    <SideBar />
    
    <button class="back-to-top">
      <ion-icon name="caret-up-outline"></ion-icon>
    </button>

    <!-- main -->
    <div class="main">
      <!-- main navbar -->
      <div class="main-navbar">
        <!-- search bar -->
        <div class="search">
          <input type="text" placeholder="What book do you want to find?" />
          <button class="search-btn">Search</button>
        </div>
        <!-- profile icon on left side of navbar -->
        <div class="profile">
          <a class="cart" href="#"><ion-icon name="cart-outline"></ion-icon></a>
          <a class="user" href="#"><ion-icon name="person-outline"></ion-icon></a>
        </div>
      </div>
      <!-- main highlight -->
      <div class="main-highlight">
        <!-- title section and arrow -->
        <div class="main-header">
          <h2 class="main-title">Recommendations</h2>
          <div class="main-arrow">
            <ion-icon class="back" name="chevron-back-circle-outline"></ion-icon>
            <ion-icon class="next" name="chevron-forward-circle-outline"></ion-icon>
          </div>
        </div>
        <!-- highlight menu -->
        <div class="highlight-wrapper">
          <div v-for="highlight in highlights" :key="highlight.id" class="highlight-card">
            <img class="highlight-img" :src="highlight.imgUrl" />
            <div class="highlight-desc">
              <h4>{{ highlight.name }}</h4>
              <p>{{ highlight.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- main menus / order -->
      <div class="main-menus">
        <!-- filter section -->
        <div class="main-filter">
          <div>
            <h2 class="main-title">Books <br />Category</h2>
            <div class="main-arrow">
              <ion-icon class="back-menus" name="chevron-back-circle-outline"></ion-icon>
              <ion-icon class="next-menus" name="chevron-forward-circle-outline"></ion-icon>
            </div>
          </div>
          <!-- Books category -->
          <div class="filter-wrapper">
            <div v-for="filter in filters" :key="filter.id" class="filter-card">
              <div class="filter-icon">
                <ion-icon :name="filter.iconName"></ion-icon>
              </div>
              <p>{{ filter.name }}</p>
            </div>
          </div>
        </div>
        <hr class="divider" />
        <!-- List of books -->
        <div class="main-detail">
          <h2 class="main-title">Chọn sách</h2>
          <!-- Detail wrapper -->
          <div class="detail-wrapper">
            <div v-for="book in books" :key="book.id" class="detail-card">
              <img class="detail-img" :src="book.imageUrl" />
              <div class="detail-desc">
                <div class="detail-name">
                  <h4>{{ book.name }}</h4>
                  <p class="detail-sub">{{ book.description }}</p>
                  <p class="price">{{ book.price }}</p>
                </div>
                <ion-icon class="detail-favorites" name="bookmark-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'home',
  components: {
    SideBar
  },
  data() {
    return {
      filters: [
        {
          id: 1,
          iconName: 'book-outline',
          name: 'All'
        },
        {
          id: 2,
          iconName: 'disc-outline',
          name: 'Action'
        },
        {
          id: 3,
          iconName: 'business-outline',
          name: 'Business'
        },
        {
          id: 4,
          iconName: 'pizza-outline',
          name: 'Cooking'
        },
        {
          id: 5,
          iconName: 'happy-outline',
          name: 'Humor'
        },
        {
          id: 6,
          iconName: 'hourglass-outline',
          name: 'History'
        },
        {
          id: 7,
          iconName: 'eye-outline',
          name: 'Horror'
        },
        {
          id: 8,
          iconName: 'medkit-outline',
          name: 'Medical'
        }
      ],
      books: [
        {
          id: 1,
          imageUrl: 'book1.png',
          name: 'Book 1',
          description: 'Description of Book 1',
          price: '99.000đ'
        },
        {
          id: 2,
          imageUrl: 'book2.png',
          name: 'Book 2',
          description: 'Description of Book 2',
          price: '99.000đ'
        },
        {
          id: 3,
          imageUrl: 'book3.png',
          name: 'Book 3',
          description: 'Description of Book 3',
          price: '99.000đ'
        },
        {
          id: 4,
          imageUrl: 'book4.png',
          name: 'Book 4',
          description: 'Description of Book 4',
          price: '99.000đ'
        },
        {
          id: 5,
          imageUrl: 'book5.png',
          name: 'Book 5',
          description: 'Description of Book 5',
          price: '99.000đ'
        },
        {
          id: 6,
          imageUrl: 'book6.png',
          name: 'Book 6',
          description: 'Description of Book 6',
          price: '99.000đ'
        },
        {
          id: 7,
          imageUrl: 'book7.png',
          name: 'Book 7',
          description: 'Description of Book 7',
          price: '99.000đ'
        },
        {
          id: 8,
          imageUrl: 'book8.png',
          name: 'Book 8',
          description: 'Description of Book 8',
          price: '99.000đ'
        },
        {
          id: 9,
          imageUrl: 'book9.png',
          name: 'Book 9',
          description: 'Description of Book 9',
          price: '99.000đ'
        },
        {
          id: 10,
          imageUrl: 'book10.png',
          name: 'Book 10',
          description: 'Description of Book 10',
          price: '99.000đ'
        },
        {
          id: 11,
          imageUrl: 'book11.png',
          name: 'Book 11',
          description: 'Description of Book 11',
          price: '99.000đ'
        },
        {
          id: 12,
          imageUrl: 'book12.png',
          name: 'Book 12',
          description: 'Description of Book 12',
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
      ]
    }
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
  margin-left: 250px;
}

.main-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  background-color: var(--whiteColor);
  border-radius: 20px;
}

.search input {
  width: 80%;
  height: 100%;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
}

.search-btn {
  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  border: none;
  border-radius: 20px;
  width: 20%;
  cursor: pointer;
}

.search:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.search-btn:hover {
  background-color: var(--primaryColor);
}

.profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart,
.user {
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
.cart:hover,
.user:hover {
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
.main-arrow {
  font-size: 24px;
}

.back,
.next {
  cursor: pointer;
}

.back:hover,
.next:hover {
  color: var(--primaryColor);
}

.highlight-wrapper {
  width: 100%;
  display: flex;
  padding: 1px;
  border-radius: 8px;
  gap: 1.5rem;
  overflow-x: hidden;
}

.highlight-card {
  display: flex;
  flex-direction: row;
  min-width: 200px;
  width: auto;
  height: 100%;
  gap: 1rem;
  border-radius: 8px;
  padding: 1%;
  background-color: var(--greyColor);
  cursor: pointer;
}

.highlight-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
}

.highlight-desc h4 {
  color: var(--primaryColor);
}

.highlight-desc p {
  color: var(--blackColor);
  font-size: 13px;
}

.highlight-card:hover {
  background-color: var(--whiteColor);
  box-shadow: rbga(176, 176, 176, 0.2) 0px 2px 8px 0px;
}

.main-menus {
  min-height: 100%;
  height: 100%;
  background-color: var(--greyColor);
  padding: 2%;
  border-radius: 8px;
}

.main-filter {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

.back-menus,
.next-menus {
  cursor: pointer;
}

.back-menus:hover,
.next-menus:hover {
  color: var(--primaryColor);
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
  /* color: var(--primaryColor); */
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

.main-detail {
  margin: 1rem 0 1.5rem 0;
}

.detail-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  margin-top: 1rem;
  gap: 1%;
  border-radius: 8px;
}

.detail-card {
  min-height: auto;
  height: 100%;
  background-color: var(--whiteColor);
  border-radius: 8px;
  margin: 1% 0;
  box-shadow: rbga(176, 176, 176, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
}

.detail-img {
  width: 100%;
  height: auto;
  min-height: 430px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
}

.detail-desc {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
  width: 100%;
}

.detail-sub {
  font-size: 12px;
  color: var(--darkGreyColor);
  letter-spacing: 0.5;
  margin: 1% 0;
}

.price {
  color: var(--primaryColor);
}

.detail-favorites {
  font-size: 24px;
}

.detail-favorites:hover {
  color: var(--secondaryColor);
}

.detail-card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0 px 8px 24px;
}

.detail-card:hover .detail-img {
  filter: opacity(1);
}

.detail-card:hover .detail-name h4 {
  color: var(--primaryColor);
}

.detail-card:hover .price {
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

.back-to-top {
  position: fixed;
  bottom: 25px;
  right: 20px;
  font-size: 26px;
  width: 50px;
  height: 50px;
  background-color: var(--whiteColor);
  color: var(--primaryColor);
  outline: none;
  border: 3px solid var(--primaryColor);
  border-radius: 50%;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: background-color, color;
  z-index: 99;
  cursor: pointer;
}

.back-to-top:hover,
.back-to-top:focus {
  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  border: 3px solid var(--whiteColor);
}
</style>
