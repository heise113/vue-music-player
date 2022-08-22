<template>
  <div class="item-wrapper" @click="$emit('selected_track', item)">
<!--    <img :src="`../assets/images/track/${item.imageSrc}`" alt="#" class="item-wrapper__image">-->
    <img src="../assets/images/track/ya-svoboden.jpg" alt="#" class="item-wrapper__image">
    <div class="item-wrapper__name">
      <p class="item-wrapper__name__song">
        {{ item.artistName }}
      </p>
      <p class="item-wrapper__name__artist">
        {{ item.name }}
      </p>
    </div>
    <div class="item-wrapper__time">
      3:18
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">

  .item-wrapper {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;

    &__image {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 5px;
    }

    &__name {
      flex-grow: 1;

      &__song {
        font-weight: 700;
        color: $gray;
        margin-bottom: 5px;
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &__artist {
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &__time {
      align-self: center;
      font-weight: 500;
      color: $gray;
      margin-left: 10px;
    }
  }

</style>