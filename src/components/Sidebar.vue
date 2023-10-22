<template>
  <aside>
    <nav class="sidebar" :class="{ close: !isSidebarOpen }">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/logo.png" alt="logo" />
          </span>

          <div class="text header-text">
            <span class="name">Bookstore</span>
            <span class="user-name">User</span>
          </div>
        </div>

        <i class="bx bx-chevron-right toggle" @click="toggleSidebar"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Home</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-money icon"></i>
                <span class="text nav-text">Bills</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-wallet icon"></i>
                <span class="text nav-text">Wallet</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-bell icon"></i>
                <span class="text nav-text">Notification</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-chat icon"></i>
                <span class="text nav-text">Contact Us</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="#">
                <i class="bx bx-cog icon"></i>
                <span class="text nav-text">Setting</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer">
          <li class="">
            <a href="/Login">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>

          <li class="mode">
            <div class="light-dark" @click="toggleDarkMode">
              <i class="bx bx-moon icon moon" v-if="!isDarkMode"></i>
              <i class="bx bx-sun icon sun" v-if="isDarkMode"></i>
            </div>
            <span class="mode-text text">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>

            <div class="toggle-switch" @click="toggleDarkMode">
              <div class="switch" :class="{ dark: isDarkMode }"></div>
            </div>
          </li>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isDarkMode: false,
      isSidebarOpen: true // Control sidebar open/close
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      const body = document.querySelector('body')
      body.classList.toggle('dark', this.isDarkMode)
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

<style>
body {
  height: 100vh;
  background: var(--body-color);
  transition: var(--tran-04);
}

body.dark {
  --body-color: #18191a;
  --sidebar-color: #242526;
  --primary-color: #3a3b3c;
  --primary-color-light: #3a3b3c;
  --toggle-color: #fff;
  --text-color: #ccc;
}
/* ===== Sidebar ===== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  padding: 10px 14px;
  background: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 100;
}
.sidebar.close {
  width: 88px;
}
/* ===== Reusable CSS */
.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  transition: var(--tran-03);
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .text {
  opacity: 0;
}
.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}
.sidebar li {
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
}
.sidebar li .icon {
  min-width: 60px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
  transition: var(--tran-02);
}
.sidebar header {
  position: relative;
}
.sidebar .image-text img {
  width: 55px;
  border-radius: 6px;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
}

.header-text .name {
  font-weight: 600;
}
.header-text .user-name {
  margin-top: -2px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translate(-50%) rotate(180deg);
  height: 25px;
  width: 27px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  color: var(--sidebar-color);
  font-size: 25px;
  transition: var(--tran-03);
}
.sidebar.close header .toggle {
  transform: translate(-50%);
}
body.dark .sidebar header .toggle {
  right: -28px;
  transform: rotate(180deg);
  color: var(--text-color);
}
.sidebar li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: var(--tran-04);
}

.sidebar li a:hover {
  background: var(--primary-color);
  border-radius: 5px;
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text {
  color: var(--text-color);
}

.sidebar .menu-bar {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-bar .mode {
  position: relative;
  background: var(--primary-color-light);
  border-radius: 6px;
}
.menu-bar .mode .light-dark {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}
.menu-bar .mode i {
  position: absolute;
  transition: var(--tran-03);
}

.menu-bar .mode i.sun {
  opacity: 0;
}
body.dark .menu-bar .mode i.sun {
  opacity: 1;
}
body.dark .menu-bar .mode i.moon {
  opacity: 0;
}
.menu-bar .mode .toggle-switch {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;
  cursor: pointer;
  border-radius: 6px;
  background: var(--primary-color-light);
}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  background: var(--toggle-color);
  border-radius: 25px;
}
.switch::before {
  content: '';
  position: absolute;
  height: 15px;
  width: 15px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: var(--sidebar-color);
  transition: var(--tran-03);
}
body.dark .switch::before {
  left: 24px;
}
</style>
