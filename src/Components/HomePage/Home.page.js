import React from 'react'
import { useGlobalContext } from '../../context/global'

import UpcomingPage from '../Upcoming/Upcoming.page'
import { HomepageStyled } from './Home.page.style'
import PopularPage from '../Popular/Popular.page'
import AiringPage from '../Airing/Airing.page'

function HomePage() {

    const { handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <PopularPage rendered={rendered} />
            case 'airing':
                return <AiringPage rendered={rendered} />
            case 'upcoming':
                return <UpcomingPage rendered={rendered} />
            default:
                return <PopularPage rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' :
                            rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}
                            className='btn-popular-search'
                            data-testid='btn-popular-search'
                            datatype='btn-popular-search'
                        >Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input
                                type="text"
                                name='input-search'
                                className='input-search'
                                placeholder="Search Anime"
                                value={search}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className='btn-search'
                                data-testid='btn-search'
                                id='btn-search'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}
                            className='btn-airing-search'
                            data-testid='btn-airing-search'
                            datatype='btn-airing-search'
                        >
                            Airing
                        </button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}
                            className='btn-upcoming-search'
                            data-testid='btn-upcoming-search'
                            datatype='btn-upcoming-search'
                        >
                            Upcoming
                        </button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}



export default HomePage