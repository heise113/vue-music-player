<template>
  <div class="wrapper-player" @click="$emit('changePlayer')">
    <div class="wrapper-player__time-line">

    </div>
    <div class="wrapper-player__playing-track">
      <div class="wrapper-player__playing-track__track">
        <img src="../assets/images/track/ya-svoboden.jpg" alt="#" class="wrapper-player__playing-track__track__image">
        <div class="wrapper-player__playing-track__track__name">
          <div class="wrapper-player__playing-track__track__name__song">
            {{ track.name }}
          </div>
          <div class="wrapper-player__playing-track__track__name__artist">
            {{ track.artistName }}
          </div>
        </div>
      </div>
      <div class="wrapper-player__playing-track__buttons">
        <button class="wrapper-player__playing-track__buttons__prev" @click.stop="$emit('prevTrack', this.track.id)">
          <fa icon="fa-solid fa-backward" class="wrapper-player__playing-track__buttons__prev__icon"/>
        </button>
        <button class="wrapper-player__playing-track__buttons__pause" @click.stop="playing = !playing">
          <fa v-if="!playing" icon="fa-solid fa-pause" class="wrapper-player__playing-track__buttons__pause__icon"/>
          <fa v-if="playing" icon="fa-solid fa-play" class="wrapper-player__playing-track__buttons__pause__icon"/>
        </button>
        <button class="wrapper-player__playing-track__buttons__next" @click.stop="$emit('nextTrack', this.track.id)">
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
      playing: false,
    }
  },
  methods: {}
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