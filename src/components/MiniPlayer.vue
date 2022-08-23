<template>
  <div class="wrapper-player" @click="$emit('changePlayer')">
<!--    <audio :src="require(`@/assets/songs/${track.songSrc}`)" preload="auto" id="mini-player" autoplay ref="audioPlayer"/>-->
    <div class="wrapper-player__time-line">

    </div>
    <div class="wrapper-player__playing-track">
      <div class="wrapper-player__playing-track__track">
        <img :src="require(`@/assets/images/track/${track.imageSrc}`)" alt="#"
             class="wrapper-player__playing-track__track__image">
        <div class="wrapper-player__playing-track__track__name">
          <div class="wrapper-player__playing-track__track__name__song">
            {{ track.name }}
          </div>
          <div class="wrapper-player__playing-track__track__name__artist">
            {{ track.artistName }}
          </div>
        </div>
      </div>
      <div class="wrapper-player__playing-track__buttons" @click.stop>
        <button class="wrapper-player__playing-track__buttons__prev" @click.stop="prev">
          <fa icon="fa-solid fa-backward" class="wrapper-player__playing-track__buttons__prev__icon"/>
        </button>
        <button class="wrapper-player__playing-track__buttons__pause" @click.stop="play">
          <fa v-if="playing" icon="fa-solid fa-pause" class="wrapper-player__playing-track__buttons__pause__icon"/>
          <fa v-if="!playing" icon="fa-solid fa-play" class="wrapper-player__playing-track__buttons__pause__icon"/>
        </button>
        <button class="wrapper-player__playing-track__buttons__next" @click.stop="next">
          <fa icon="fa-solid fa-forward" class="wrapper-player__playing-track__buttons__next__icon"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    track: {
      type: Object
    }
  },
  data() {
    return {
      playing: true,
      player: new Audio(),
    }
  },
  methods: {
    prev() {
      this.$emit('prevTrack', this.track.id)
      this.playing = true
    },
    next() {
      this.$emit('nextTrack', this.track.id)
      this.playing = true
    },
    play() {
      this.playing = !this.playing
      this.playing === false ? this.$refs.audioPlayer.pause() : this.$refs.audioPlayer.play();
      let pl = document.getElementById('mini-player')
      // pl.addEventListener('timeupdate', () => console.log(pl.currentTime.toFixed(0)))
      pl.addEventListener('timeupdate', () => console.log((pl.currentTime / pl.duration) * 100))

      // console.dir((pl.currentTime / pl.duration) * 100)
    }
  }
}

</script>

<style scoped lang="scss">

.wrapper-player {
  background-color: $lightgray;
  height: 80px;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &__playing-track {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__track {
      display: flex;

      &__image {
        height: 50px;
        width: 50px;
        margin-right: 10px;
      }

      &__name {
        &__song {
          margin-bottom: 5px;
          color: $gray;
          font-weight: 700;
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &__artist {
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    &__buttons {
      display: flex;
      align-items: center;

      & button {
        background-color: $lightgray;
        padding: 3px;
      }

      &__prev, &__next {
        font-size: 18px;
      }

      &__pause {
        font-size: 22px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}

</style>

