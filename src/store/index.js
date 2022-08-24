import {createStore} from "vuex";

export default createStore({
    state: {
        songs: [
            {
                id: 1,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3'),
            },
            {
                id: 2,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 3,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
            {
                id: 4,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3')
            },
            {
                id: 5,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 6,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
            {
                id: 7,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3')
            },
            {
                id: 8,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 9,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
            {
                id: 10,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3')
            },
            {
                id: 11,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 12,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
            {
                id: 13,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3')
            },
            {
                id: 14,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 15,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
            {
                id: 16,
                name: '1111111111111111111111111111111111Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: require('@/assets/songs/ya-soskuchilsya.mp3')
            },
            {
                id: 17,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: require('@/assets/songs/kukla-kolduna.mp3')
            },
            {
                id: 18,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: require('@/assets/songs/ya-svoboden.mp3')
            },
        ],
        player: new Audio()
    },
    mutations:{

    },
    getters: {
        getSongs(state) {
            return state.songs
        },
    }
})