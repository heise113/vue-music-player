<template>
  <div class="wrapper-player" @click="$emit('changePlayer')">
    <div class="wrapper-player__timeline" id="timeline">
      <div class="wrapper-player__timeline__line" id="line"></div>
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
          <fa v-if="$store.state.playing" icon="fa-solid fa-pause" class="wrapper-player__playing-track__buttons__pause__icon"/>
          <fa v-if="!$store.state.playing" icon="fa-solid fa-play" class="wrapper-player__playing-track__buttons__pause__icon"/>
        </button>
        <button class="wrapper-player__playing-track__buttons__next" @click.stop="next">
          <fa icon="fa-solid fa-forward" class="wrapper-player__playing-track__buttons__next__icon"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import PlayerControl from "@/mixins/PlayerControl";

export default {
  mixins: [
      PlayerControl
  ],
}

</script>

<style scoped lang="scss">

.wrapper-player {
  position: relative;
  background-color: $lightgray;
  height: 80px;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &__timeline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: rgba(0, 0, 0, 0.2);


    &__line {
      background-color: orange;
      height: 100%;
      width: 0;
    }
  }

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

