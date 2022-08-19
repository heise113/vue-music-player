<template>
  <div class="wrapper-player">
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
        <button class="wrapper-player__playing-track__buttons__prev">prev</button>
        <button class="wrapper-player__playing-track__buttons__pause">pause</button>
        <button class="wrapper-player__playing-track__buttons__next">next</button>
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
      }
    }
  }

</style>