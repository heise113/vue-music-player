<template>
  <div class="profile" @click="viewModal">
    <div class="profile__personal-data">
      <div class="profile__personal-data__logo">

      </div>
      <p class="profile__personal-data__name">Аркадий Тотров</p>
    </div>
    <transition name="fade">
      <div v-if="active_window" class="profile__window">
        <div class="profile__window__profile">
          <div class="profile__window__profile__logo">

          </div>
          <p class="profile__window__profile__text">
            Профиль
          </p>
        </div>
        <div class="profile__window__setting">
          <div class="profile__window__setting__logo">

          </div>
          <p class="profile__window__setting__text">
            Настройки
          </p>
        </div>
        <div class="profile__window__logout">
          <div class="profile__window__logout__logo">

          </div>
          <p class="profile__window__logout__text">
            Выйти
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active_window: false
    }
  },
  methods: {
    viewModal() {
      this.active_window ? this.active_window = false : this.active_window = true
      document.addEventListener('click', () => this.active_window = false)
    }

  }
}

</script>

<style scoped lang="scss">

.profile {

  &__window {
    position: absolute;
    margin-top: 15px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;

    &__profile, &__setting, &__logout {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &__logo {
        height: 30px;
        width: 30px;
        background-color: gray;
        margin-right: 15px;
      }
      &__text {

      }
    }
  }

  &__personal-data {
    display: flex;
    align-items: center;
    justify-content: center;

    &__name {
      color: white;
    }

    &__logo {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      background-color: gray;
    }
  }
}

.fade {
  &-enter-from {
    transform: translateY(20px);
    opacity: 0;
  }

  //&-enter-to {
  //  transform: translateY(5px);
  //}

  &-enter-active {
    transition: all 0.5s ease;
  }
}

</style>