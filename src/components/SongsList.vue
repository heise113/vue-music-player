<template>
  <div class="songs-list">
    <p class="songs-list__title">Еееее роцка!!!</p>
    <div
        class="list"
        v-for="item in $store.getters.getSongs"
        :key="item.id"
    >
      <ItemSongs :item="item"/>
    </div>
  </div>
</template>

<script>
import ItemSongs from "@/components/SongsItem"

export default {
  components: {
    ItemSongs
  }
}
</script>

<style scoped lang="scss">

  .songs-list {
    max-width: 375px;
    width: 100%;
    background-color: $white;
    padding: 10px;
    border-radius: 10px;
    &__title {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
  }

</style>