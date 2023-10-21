<template>
  <!-- Pagination -->
  <div class="pagination">
    <a href="#">&laquo;</a>
    <a class="active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">&raquo;</a>
  </div>
</template>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}
.pagination a.active {
  background-color: var(--primaryColor);
  color: white;
  border: 1px solid var(--primaryColor);
}
.pagination a:hover:not(.active) {
  background-color: var(--secondaryColor);
  color: var(--whiteColor);
}
.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 10px;
}
.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 10px;
}
</style>
