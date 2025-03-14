import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import Sidebar from '../Sidebar/Sidebar.page'
import { PopularStyled } from './Upcoming.page.style'

// className={formatTitle(anime.title)}

function UpcomingPage({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext()

    const conditionalRender = () => {
        if (!isSearch && rendered === 'upcoming') {
            return upcomingAnime?.map((anime) => {
                return <Link
                    to={`/anime/${anime.mal_id}`}
                    key={anime.mal_id}
                    className={formatTitle(anime.title)}
                >
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                </Link>
            })
        } else {
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    const formatTitle = (title) => {
        return title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9\s;-]/g, '')
            .replace(/;/g, '-')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .toLowerCase();
    };


    return (
        <PopularStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}



export default UpcomingPage