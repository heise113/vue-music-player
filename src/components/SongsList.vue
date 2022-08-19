<template>
  <div class="songs-list">
    <p class="songs-list__title">Еееее роцка!!!</p>
    <div
        class="songs-list__list"
        v-for="item in $store.getters.getSongs"
        :key="item.id"
    >
      <ItemSongs :item="item" @selected_track="playTrack"/>
    </div>
    <MiniPlayer v-if="active_mini_player" :track="temp_track" class="songs-list__mini-player"/>
  </div>
</template>

<script>
import ItemSongs from "@/components/SongsItem"
import MiniPlayer from "@/components/MiniPlayer"

export default {
  components: {
    ItemSongs,
    MiniPlayer
  },
  data() {
    return {
      active_mini_player: false,
      temp_track: null
    }
  },
  methods: {
    playTrack(track) {
      this.temp_track = track
      this.active_mini_player = true
    }
  }
}
</script>

<style scoped lang="scss">

  .songs-list {
    position: relative;
    max-width: 375px;
    width: 100%;
    max-height: 70vh;
    background-color: $white;
    border-radius: 10px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;               /* ширина scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: pink;        /* цвет дорожки */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ba83ca;
      background-image: -webkit-linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);
    }

    &__title {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
      padding-top: 15px;
    }

    &__list {
      padding-left: 15px;
      padding-right: 15px;
    }

    &__mini-player {
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

</style>