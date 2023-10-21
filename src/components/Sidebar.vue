<template>
  <!-- sidebar -->
  <div class="sidebar">
    <!-- Logo -->
    <h1 class="logo">BookStore</h1>
    <!-- List of menus -->
    <div class="sidebar-menu">
      <a href="/"><ion-icon name="storefront-outline"></ion-icon>Home</a>
      <a href="/about"><ion-icon name="receipt-outline"></ion-icon>Bills</a>
      <a href="#"><ion-icon name="wallet-outline"></ion-icon>Wallet</a>
      <a href="#"><ion-icon name="notifications-outline"></ion-icon>Notification</a>
      <a href="#"><ion-icon name="chatbubbles-outline"></ion-icon>Contact Us</a>
      <a href="#"><ion-icon name="settings-outline"></ion-icon>Setting</a>
    </div>
    <!-- Logout -->
    <div class="sidebar-logout">
      <a href="#"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>
.sidebar{
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2%;
  background-color: var(--primaryColor);
  color: var(--whiteColor);
}

.sidebar-menu{
  display: flex;
  flex-direction: column;
}

.sidebar-menu a, .sidebar-logout a{
  padding: 5% 8%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  text-decoration: none;
  color: var(--whiteColor);
}

.sidebar-menu a ion-icon , .sidebar-logout a ion-icon{
  font-size: 20px;
}
.sidebar-menu a:hover , .sidebar-logout a:hover{
  background-color: var(--secondaryColor);
  border-radius: 50px;
}
</style>