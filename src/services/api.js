import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://superhero-search.p.rapidapi.com/',
//     params: {hero: 'batman'},
//     headers: {
//         'x-rapidapi-key': '56c276be8emsha7d65ae357f8af8p1aa1b9jsnc8889a939d93',
//         'x-rapidapi-host': 'superhero-search.p.rapidapi.com'
//       }
//   });

const api = axios.create({
    baseURL: 'https://superheroapi.com/api/10159142286944414'
})

export default api;