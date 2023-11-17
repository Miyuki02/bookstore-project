<script setup>
import { ref } from "vue";

const props = defineProps({
  initialBook: { type: Object, required: true },
});
const $emit = defineEmits(["submit:book", "delete:book"]);

const editedBook = ref({ ...props.initialBook });
function submitBook() {
  $emit("submit:book", editedBook.value);
}
function deleteBook() {
  $emit("delete:book", editedBook.value.id);
}
</script>

<template>
  <form @submit.prevent="submitBook">
    <div class="form-group">
      <label for="name">Tên sách</label>
      <input
        id="name"
        type="text"
        class="form-control"
        v-model="editedBook.name"
      />
    </div>
    <div class="form-group">
      <label for="author">Tác giả</label>
      <input
        id="author"
        type="text"
        class="form-control"
        v-model="editedBook.author"
      />
    </div>
    <div class="form-group">
      <label for="price">Giá</label>
      <input
        id="price"
        type="text"
        class="form-control"
        v-model="editedBook.price"
      />
    </div>
    <div class="form-group">
      <label for="image">Ảnh</label>
      <input
        id="image"
        type="text"
        class="form-control"
        v-model="editedBook.imageUrl"
      />
    </div>

    <div class="form-group">
      <button>Lưu</button>
      <button
        v-if="editedBook.id"
        type="button"
        @click="deleteBook"
      >
        Xóa
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>
