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