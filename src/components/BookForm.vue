<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialBook: { type: Object, required: true }
})
const $emit = defineEmits(['submit:book', 'delete:book'])

const editedBook = ref({ ...props.initialBook })
function submitBook() {
  $emit('submit:book', editedBook.value)
}
function deleteBook() {
  $emit('delete:book', editedBook.value.id)
}

const selectedFile = ref(null);

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
};

const onUpload = async () => {
  if (!selectedFile.value) {
    console.error('No file selected.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('file', selectedFile.value);

    // Use the native fetch API for the HTTP request
    const response = await fetch('http://localhost:5173/api/products/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle the successful response here
    console.log('Upload successful');
  } catch (error) {
    // Handle any errors during the upload
    console.error('Error:', error.message);
  }
};

</script>

<template>
  <form @submit.prevent="submitBook">
    <div class="form-group">
      <label for="name">Tên sách</label>
      <input id="name" type="text" class="form-control" v-model="editedBook.name" />
    </div>
    <div class="form-group">
      <label for="author">Tác giả</label>
      <input id="author" type="text" class="form-control" v-model="editedBook.author" />
    </div>
    <div class="form-group">
      <label for="price">Giá</label>
      <input id="price" type="text" class="form-control" v-model="editedBook.price" />
    </div>
    <div class="form-group">
      <label for="image">Ảnh</label>
      <input id="image" type="file" @change="onFileSelected" class="form-control" />
      <button @click="onUpload">Upload</button>
    </div>

    <div class="form-group">
      <button>Lưu</button>
      <button v-if="editedBook.id" type="button" @click="deleteBook">Xóa</button>
    </div>
  </form>
</template>

<style scoped></style>
