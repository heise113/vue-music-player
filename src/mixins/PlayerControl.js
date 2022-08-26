export default {
    created() {
        this.$store.state.player.src === ''
            ? (this.$store.state.player.src = this.track.songSrc, this.$store.state.player.play())
            : null
        this.$store.state.player.addEventListener('timeupdate', () => {
            console.log(this.$store.state.player.duration)
            this.percent = (this.$store.state.player.currentTime / this.$store.state.player.duration) * 100
            if (this.$store.state.active_mini_player) {
                this.length = document.getElementById('timeline').offsetWidth
                document.getElementById('line').style.width = `${Math.round(this.length / 100 * this.percent)}px`
                this.$store.state.vremeni_proshlo = Math.round(this.$store.state.player.currentTime)
            }
            if (this.$store.state.active_big_player) {
                this.length2 = document.getElementById('big-timeline').offsetWidth
                document.getElementById('big-line').style.width = `${Math.round(this.length2 / 100 * this.percent)}px`
            }
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
    data() {
        return {
            temp_time: 0,
            percent: null,
            length: null,
            length2: null,
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
            this.$store.state.playing === false ? this.$store.state.player.pause() : this.$store.state.player.play();
        },
        parseTime(time) {
            let temp_second = '0'
            let temp_minute = '0'
            if (time >= 60) {
                temp_minute = String(Math.floor(time / 60))
            }
            temp_minute.length === 1 ? temp_minute = `0${temp_minute}` : null
            temp_second = String(Math.floor(time % 60))
            temp_second.length === 1 ? temp_second = `0${temp_second}` : null
            return `${temp_minute}:${temp_second}`
        },
        moveTimeLine(e) {
            let target = document.getElementById('big-timeline').getBoundingClientRect();
            let x = e.clientX - target.left;
            console.log(x)
            document.getElementById('big-line').style.width = `${x}px`
            this.$store.state.player.currentTime = this.$store.state.player.duration / x
        }
    }
}