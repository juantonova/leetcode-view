<template>
  <ul className="menu menu-horizontal">
    <div class="logo">Leetcode</div>
    <li class="menu-button"><a href="/">Tasks list</a></li>
    <!-- Так как на бэке не реализована авторизация, ид в ссылке на пользователя захардкожен -->
    <li class="menu-button"><a href="/users/1">Profile</a></li>
  </ul>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  color: oklch(var(--a));
  font-size: 16px;
  margin-right: 18px;
}

.menu-button {
  color: oklch(var(--bc));
}
</style>
