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
    height: 70vh;
    max-width: 375px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>

<style lang="scss">
//
</style>