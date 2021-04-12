import * as type from '../types';


export function getFilms(films) {
    // console.log('films js',actiom)
    return {
        type:type.GET_FILMS_REQUESTED,
        payload:films,
    }
}