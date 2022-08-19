import {createStore} from "vuex";

export default createStore({
    state: {
        songs: [
            {
                id: 1,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 2,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 3,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
            {
                id: 4,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 5,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 6,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
            {
                id: 7,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 8,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 9,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
            {
                id: 10,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 11,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 12,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
            {
                id: 13,
                name: 'Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 14,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 15,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
            {
                id: 16,
                name: '1111111111111111111111111111111111Я так соскучился',
                artistName: 'Порнофильмы',
                imageSrc: 'ya-soskuchilsya.jpg',
                songSrc: 'ya-soskuchilsya',
            },
            {
                id: 17,
                name: 'Кукла колдуна',
                artistName: 'Король и шут',
                imageSrc: 'kukla-kolduna.jpg',
                songSrc: 'kukla-kolduna',
            },
            {
                id: 18,
                name: 'Я свободен',
                artistName: 'Кипелов',
                imageSrc: 'ya-svoboden.jpg',
                songSrc: 'ya-svoboden',
            },
        ]
    },
    mutations:{

    },
    getters: {
        getSongs(state) {
            return state.songs
        }
    }
})