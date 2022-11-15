<template>
 <nav>
      <router-link to="/labels" class="item">
      <Icon name="label" />标签
      </router-link>
      <router-link to="/money" class="item">
      <Icon name="money" />
      记账
      </router-link>
      <router-link to="/statistics" class="item">
      <Icon name="statistics" />
      统计
      </router-link>
    </nav>
</template>

<script lang="ts">
  export default {
        name: 'Nav',
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  nav {
    @extend %outerShadow; //外阴影
    display: flex;
    flex-direction: row;
    font-size: 12px;
    > .item {
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
    a {
    &.router-link-exact-active {
      color: $color-highlight;
      }
    }
    }
</style>