<template>
  <div class="wrapper-player">
    <img :src="require(`@/assets/images/track/${track.imageSrc}`)" alt="" class="wrapper-player__image">
    <div class="wrapper-player__name">
      <p class="wrapper-player__name__song">
        {{ track.name }}
      </p>
      <p class="wrapper-player__name__artist">
        {{ track.artistName }}
      </p>
    </div>
    <div class="wrapper-player__timeline" id="big-timeline" @click="moveTimeLine">
      <div class="wrapper-player__timeline__line" id="big-line"></div>
    </div>
    <div class="wrapper-player__timer">
      <p class="wrapper-player__timer__proshlo">{{ parseTime($store.state.vremeni_proshlo) }}</p>
      <p class="wrapper-player__timer__alltime">{{ parseTime($store.state.player.duration) }}</p>
    </div>
    <div class="wrapper-player__buttons">
      <button class="wrapper-player__buttons__prev" @click.stop="prev">
        <fa icon="fa-solid fa-backward-step"/>
      </button>
      <button class="wrapper-player__buttons__play" @click.stop="play">
        <fa v-if="!$store.state.playing" icon="fa-solid fa-play" class="wrapper-player__playing-track__buttons__pause__icon"/>
        <fa v-if="$store.state.playing" icon="fa-solid fa-pause" class="wrapper-player__playing-track__buttons__pause__icon"/>
      </button>
      <button class="wrapper-player__buttons__next" @click.stop="next">
        <fa icon="fa-solid fa-forward-step"/>
      </button>
    </div>
  </div>
</template>

<script>
import PlayerControl from "@/mixins/PlayerControl";

export default {
  mixins: [
      PlayerControl
  ]
}
</script>

<style scoped lang="scss">

.wrapper-player {
  padding: 20px;

  &__timeline {
    height: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 270px;
    margin: 30px auto;
    overflow: hidden;
    border-radius: 30px;


    &__line {
      background-color: orange;
      height: 100%;
      width: 0;
      border-radius: 30px;
    }
  }

  &__timer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;
    margin: 0 auto;

    & p {
      font-weight: 500;
    }
  }

  &__image {
    display: block;
    width: 270px;
    height: 270px;
    margin: 30px auto;
    border-radius: 5px;
  }

  &__name {

    & p {
      text-align: center;
    }

    &__song {
      margin-bottom: 5px;
      color: $gray;
      font-size: 22px;
      font-weight: 700;
      //width: 280px;
      //white-space: nowrap;
      //overflow: hidden;
      //text-overflow: ellipsis;
    }

    &__artist {
      font-size: 18px;
      //width: 280px;
      //white-space: nowrap;
      //overflow: hidden;
      //text-overflow: ellipsis;
    }
  }

  &__buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      background-color: pink;
      color: $white;
      padding: 15px;
      height: 60px;
      width: 60px;

    }

    &__prev {
      font-size: 24px;
    }

    &__play {
      font-size: 28px;
      margin-right: 15px;
      margin-left: 15px;
      height: 80px !important;
      width: 80px !important;
      background-image: linear-gradient(to right top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#8aa7ec,#79b3f4,#69bff8,#52cffe,#41dfff,#46eefa,#5ffbf1);
    }

    &__next {
      font-size: 24px;
    }
  }
}

</style>
