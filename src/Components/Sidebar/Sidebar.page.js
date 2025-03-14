import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/global'
import { SidebarStyled } from './Sidebar.page.style';

function Sidebar() {
    const { popularAnime } = useGlobalContext()

    const sorted = popularAnime?.sort((a, b) => {
        return b.score - a.score
    })

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
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0, 5).map((anime) => {
                    return (
                        <Link
                            to={`/anime/${anime.mal_id}`}
                            className={formatTitle(anime.title)}
                            key={anime.mal_id}>
                            <img
                                src={anime.images.jpg.large_image_url}
                                className={formatTitle(anime.title)}
                                alt={anime.title}
                            />
                            <h5 className={formatTitle(anime.title)}>
                                {anime.title}
                            </h5>
                        </Link>
                    )
                })}
            </div>
        </SidebarStyled>
    )
}

export default Sidebar
