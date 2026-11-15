import React from 'react'
import FeaturedMovie from './movies/featuremovie'
import FreeTrial from './Home/freeTiral' 
import MoviesSections from './movies/moviesSections'
import ShowsSections from './shows/showsSections'

export default function MoviesAndShows() {
    return (
        <>
            <FeaturedMovie />
            <MoviesSections />
            <ShowsSections />
            <FreeTrial />
        </>
    )
}
