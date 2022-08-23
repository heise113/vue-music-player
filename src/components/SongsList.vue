<template>
  <div
      class="songs-list"
      :class="active_player ? 'songs-list_none-scroll' : null"
  >
    <div class="songs-list__title">
      <p class="songs-list__title__text">Еееее роцка!!!</p>
    </div>
    <div
        class="songs-list__list"
        v-for="item in $store.getters.getSongs"
        :key="item.id"
    >
      <ItemSongs :item="item" @selected_track="playTrack"/>
    </div>
    <MiniPlayer
        v-if="active_mini_player"
        :track="temp_track"
        class="songs-list__mini-player"
        @prevTrack="prevTrack"
        @nextTrack="nextTrack"
        @changePlayer="changePlayer"
    />
  </div>
  <transition name="view-player">
    <Player
        :track="temp_track"
        v-if="active_player"
        class="player"
    />
  </transition>
</template>

<script>
import ItemSongs from "@/components/SongsItem"
import Player from "@/components/Player"
import MiniPlayer from "@/components/MiniPlayer"

export default {
  components: {
    ItemSongs,
    MiniPlayer,
    Player
  },
  data() {
    return {
      active_player: false,
      active_mini_player: false,
      temp_track: null
    }
  },
  methods: {
    playTrack(track) {
      this.temp_track = track
      this.active_mini_player = true
    },
    prevTrack(id) {
      --id
      id < this.$store.getters.getSongs[0].id ? id = this.$store.getters.getSongs.length - 1 : null
      this.temp_track = this.$store.getters.getSongs.find(item => item.id === id)
    },
    nextTrack(id) {
      ++id
      id > this.$store.getters.getSongs[this.$store.getters.getSongs.length - 1].id ? id = 1 : null
      this.temp_track = this.$store.getters.getSongs.find(item => item.id === id)
    },
    changePlayer() {
      // this.active_player
      //     ? (this.active_player = false, this.active_mini_player = true)
      //     : (this.active_player = true, this.active_mini_player = false)
      this.active_player
          ? this.active_player = false
          : this.active_player = true
    }
  }
}
</script>

<style scoped lang="scss">

.songs-list {
  position: relative;
  max-width: 375px;
  width: 100%;
  height: 70vh;
  background-color: $white;
  border-radius: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* ширина scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: pink; /* цвет дорожки */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ba83ca;
    background-image: -webkit-linear-gradient(45deg, hsla(0, 0%, 100%, .2) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, .2) 0, hsla(0, 0%, 100%, .2) 75%, transparent 0, transparent);
  }

  &_none-scroll {
    overflow: hidden;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
      padding-top: 15px;
    }
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

.player {
  position: absolute;
  max-width: 375px;
  width: 100%;
  height: 70vh;
  border-radius: 10px;
  background-color: $white;
  overflow: hidden;
}

.view-player {
  &-enter-from, &-leave-to {
    align-self: flex-end;
    height: 0;
  }
  &-enter-active {
    transition: all 0.5s ease;
  }
}

</style>