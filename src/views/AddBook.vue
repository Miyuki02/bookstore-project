<template>
  <div class="page">
    <h4>Thêm Sách</h4>
    <BookForm :initial-book="book || {}" :book-id="bookId" @submit:book="onAddBook" />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import BookForm from "@/components/BookForm.vue";
import booksService from "@/services/books.service";

const props = defineProps(["bookId"]);
const $router = useRouter();
const $route = useRoute();
const book = ref(null);
const message = ref("");

/* Change to this when have backend api
async function getBook(id) {
  try {
    book.value = await booksService.getBook(id);
  } catch (error) {
    console.log(error);
    $router.push({
      name: "notfound",
      params: { pathMatch: $route.path.split("/").slice(1) },
      query: $route.query,
      hash: $route.hash,
    });
  }
}
*/

async function getBook(id) {
  try {
    const response = await booksService.getBook(id);
    // Check if the response is valid JSON
    const bookData = JSON.parse(response);
    book.value = bookData;
  } catch (error) {
    console.error('Error fetching book:', error);
  }
}



async function onAddBook(newBook) {
  try {
    await booksService.createBook(newBook);
    message.value = "Sách được thêm thành công.";
  } catch (error) {
    console.log(error);
  }
}


getBook(props.bookId);

</script>
