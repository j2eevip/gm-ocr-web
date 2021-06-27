<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="icon-item" @click="toggleScreen">
        <svg-icon icon-class="message" class-name="disabled" />
      </div>
      <div class="icon-item" @click="toggleScreen">
        <svg-icon :icon-class="active ? 'fullscreen' : 'fullscreen-exit'" class-name="disabled" />
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <span class="avatar-wrapper">
          <img class="user-avatar" src="../../assets/header.gif" />
          <span class="user-title">Admin<i class="el-icon-arrow-down el-icon--right"></i></span>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item divided @click="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import screenfull from "screenfull";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import Hamburger from "@/components/Hamburger/index.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const sidebar = computed(() => store.getters.sidebar);
    const avatar = computed(() => store.getters.avatar);

    const toggleSideBar = () => {
      store.dispatch("app/toggleSideBar");
    };
    const logout = async () => {
      await store.dispatch("user/logout");
      router.push(`/login?redirect=${route.fullPath}`);
    };
    const toggleScreen = () => {
      if (screenfull.isEnabled) {
        state.active = screenfull.isFullscreen;
        screenfull.toggle();
      }
    };
    const state = reactive({
      active: true,
    });
    return {
      ...toRefs(state),
      sidebar,
      avatar,
      toggleScreen,
      toggleSideBar,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    margin-right: 10px;

    &:focus {
      outline: none;
    }

    .icon-item {
      margin: 0px;
      height: 40px;
      line-height: 40px;
      width: 40px;
      text-align: center;
      float: left;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 40px;

      .avatar-wrapper {
        margin-top: 2px;
        position: relative;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        height: 50px;
        padding: 0;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 20px;
        }
        .user-title {
          position: relative;
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
