<template>
  <div class="profile-body">
    <div class="profile-card">
      <div class="image">
        <img src="../assets/green-icon.png" alt="" class="profile-img" />
      </div>

      <div class="text">
        <span class="fullName">User Name</span>
        <span class="phoneNumber">Phone Number</span>
        <span class="address">Adress</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.profile-body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: var(--primaryColor);
  padding: 3px;
  margin-bottom: 10px;
}
.image .profile-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}
.profile-card{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
  width: 100%;
  background: #fff;
  border-radius: 24px;
  padding: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.profile-card::before{
  top: 0;
  left: 0;
  border-radius: 24px 24px 0 0;
  content: "";
  position: absolute;
  height: 36%;
  width: 100%;
  background-color: var(--primaryColor);
}
.profile-card .text{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
}
.text .fullName{
  font-size: 35px;
  font-weight: 600;
}
.text .phoneNumber, .text .address{
  font-size: 25px;
  font-weight: 400;
}
</style>
