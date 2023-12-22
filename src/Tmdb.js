const API_KEY = '3a5fd7834b80aa95d4f382132eff5812';
const API_BASE = 'https://api.themoviedb.org/3'; 

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); //requisicao pra um serviço externo, espera a resposta
    const json = await req.json(); 
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {   
                // faz a requisicao para um servico externo (no caso a lista), espera a resposta e preenche em array 'items'
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?&networks=Netflix&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'war',
                title: 'Guerra',
                items: await basicFetch(`/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'history',
                title: 'História',
                items: await basicFetch(`/discover/movie?with_genres=36&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'thriller',
                title: 'Suspense',
                items: await basicFetch(`/discover/movie?with_genres=53&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'western',
                title: 'Faroeste',
                items: await basicFetch(`/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}