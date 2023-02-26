<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink class="home" to="/home">首页</RouterLink>
      <RouterLink class="choose" to="/categories">选购</RouterLink>
      <RouterLink class="found" to="/find_page">发现</RouterLink>
      <RouterLink class="cart" to="/cart">购物袋</RouterLink>
      <RouterLink class="user" to="/user">我的</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<style scoped lang='scss'>
@import "../assets/css/mixin.scss";
@import "../assets/css/color.scss";
:root {
  --color-text: $primay-color;
}
.wrapper {
  @include safe-pad-btm(30rem);
  nav {
    position: fixed;
    background: #fff;
    border-radius: 20px 20px 0 0;
    bottom: -1px;
    width: 100%;
    font-size: 12px;
    text-align: center;
    display: flex;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.04);
    z-index: 999;
    height: 4rem;
    a {
      flex: 1;
      display: inline-block;
      padding: 1.6rem 0 0.4rem 0;
      color: #000;
      &:first-child {
        border: 0;
      }
    }
    .router-link-exact-active {
      color: $primary-color;
    }
    .router-link-exact-active:hover {
      background-color: transparent;
    }
    .icon {
      position: relative;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 20px;
    }
    .active {
      transform: translateY(-10px);
      border-radius: 35px 35px 0 0;
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.04);
    }
    .home {
      background: url("src/assets/img/menu/icon_menu_home.png") 50% 15%
        no-repeat;
      background-size: 1.15rem;
    }
    .router-link-exact-active.home {
      background: url("src/assets/img/menu/icon_menu_home_active.png") 50% 15%
        no-repeat;
      background-size: 1.3rem;
      background-color: #fff;
      @extend .active;
    }
    .choose {
      background: url("src/assets/img/menu/icon_menu_select.png") 50% 15%
        no-repeat;
      background-size: 1.15rem;
    }
    .router-link-exact-active.choose {
      background: url("src/assets/img/menu/icon_menu_select_active.png") 50% 15%
        no-repeat;
      background-size: 1.3rem;
      background-color: #fff;
      @extend .active;
    }
    .found {
      background: url("src/assets/img/menu/icon_menu_find.png") 50% 15%
        no-repeat;
      background-size: 1.15rem;
    }
    .router-link-exact-active.found {
      background: url("src/assets/img/menu/icon_menu_find_active.png") 50% 15%
        no-repeat;
      background-size: 1.3rem;
      background-color: #fff;
      @extend .active;
    }
    .cart {
      background: url("src/assets/img/menu/icon_menu_shopping_bag.png") 50% 15%
        no-repeat;
      background-size: 1.15rem;
    }
    .router-link-exact-active.cart {
      background: url("src/assets/img/menu/icon_menu_shopping_bag_active.png")
        50% 15% no-repeat;
      background-size: 1.3rem;
      background-color: #fff;
      @extend .active;
    }
    .user {
      background: url("src/assets/img/menu/icon_menu_profile.png") 50% 15%
        no-repeat;
      background-size: 1.15rem;
    }
    .router-link-exact-active.user {
      background: url("src/assets/img/menu/icon_menu_profile_active.png") 50%
        15% no-repeat;
      background-size: 1.3rem;
      background-color: #fff;
      @extend .active;
    }
  }

  @media (min-width: 1024px) {
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
}
</style>
