<template>
  <div>
    <h1>Edit Book</h1>
    <div v-if="book">
      <img :src="book.imageUrl" />
      <h2>{{ book.name }}</h2>
      <p>{{ book.price }}</p>
    </div>
    <div v-else>
      <p>Book not found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const book = ref(null);
const route = useRoute();

onMounted(() => {
  const bookData = route.query.book;
  if (bookData) {
    book.value = JSON.parse(bookData);
  }
});
</script>

<style scoped>


img{
  border-radius: 5px;
  width:300px;
}
</style>