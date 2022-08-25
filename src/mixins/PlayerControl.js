export default {
    created() {
        this.$store.state.player.src === ''
            ? (this.$store.state.player.src = this.track.songSrc, this.$store.state.player.play())
            : null
        this.$store.state.player.addEventListener('timeupdate', () => {
            let percent = (this.$store.state.player.currentTime / this.$store.state.player.duration) * 100
            let length = document.getElementById('timeline').offsetWidth
            document.getElementById('line').style.width = `${Math.round(length / 100 * percent)}px`
        })
    },
    props: {
        track: {
            type: Object
        }
    },
    watch: {
        track() {
            this.$store.state.playing = true
            this.$store.state.player.src = this.track.songSrc
            this.$store.state.player.play()
        }
    },
    methods: {
        prev() {
            this.$emit('prevTrack', this.track.id)
            this.$store.state.playing = true
        },
        next() {
            this.$emit('nextTrack', this.track.id)
            this.$store.state.playing = true
        },
        play() {
            this.$store.state.playing = !this.$store.state.playing
            // this.$store.state.player.src = this.track.songSrc
            // this.$store.state.player.play()
            this.$store.state.playing === false ? this.$store.state.player.pause() : this.$store.state.player.play();
            // this.playing === false ? this.$refs.audioPlayer.pause() : this.$refs.audioPlayer.play();
            // let pl = document.getElementById('mini-player')
            // // pl.addEventListener('timeupdate', () => console.log(pl.currentTime.toFixed(0)))
            // pl.addEventListener('timeupdate', () => console.log((pl.currentTime / pl.duration) * 100))
            //
            // // console.dir((pl.currentTime / pl.duration) * 100)

        }
    }
}