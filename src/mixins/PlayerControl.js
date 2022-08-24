export default {
    created() {
        this.$store.state.player.src = this.track.songSrc
        this.$store.state.player.play()
    },
    props: {
        track: {
            type: Object
        }
    },
    data() {
        return {
            playing: true
        }
    },
    watch: {
          track() {
            this.playing = true
            this.$store.state.player.src = this.track.songSrc
            this.$store.state.player.play()
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
            // this.$store.state.player.src = this.track.songSrc
            // this.$store.state.player.play()
            this.playing === false ? this.$store.state.player.pause() : this.$store.state.player.play();
            // this.playing === false ? this.$refs.audioPlayer.pause() : this.$refs.audioPlayer.play();
            // let pl = document.getElementById('mini-player')
            // // pl.addEventListener('timeupdate', () => console.log(pl.currentTime.toFixed(0)))
            // pl.addEventListener('timeupdate', () => console.log((pl.currentTime / pl.duration) * 100))
            //
            // // console.dir((pl.currentTime / pl.duration) * 100)

        }
    }
}