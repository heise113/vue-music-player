<template>
  <div class="wrapper">
<!--    <TestTest/>-->
    <SongsList/>
  </div>
</template>

<script>

import SongsList from "@/components/SongsList"
// import TestTest from "@/components/TestTest"

export default {
  components: {
    // TestTest,
    SongsList
  },
}

</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    max-width: 375px;
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>

<style lang="scss">
//
</style>