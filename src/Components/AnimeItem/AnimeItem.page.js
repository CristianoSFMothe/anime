import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimeItemStyled } from './AnimeItem.style'

const baseUrl = "https://api.jikan.moe/v4/anime"

function AnimeItemPage() {
    const { id } = useParams()

    //state
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, synopsis,
        trailer, duration, aired,
        season, images, rank,
        score, scored_by, popularity,
        status, rating, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`${baseUrl}/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`${baseUrl}/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }


    //initial render
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])

    return (
        <AnimeItemStyled>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        <p className='displayed'>
                            <span>Displayed:</span><span>{aired?.string}</span>
                        </p>
                        <p className='rating'>
                            <span>Rating:</span><span>{rating}</span>
                        </p>
                        <p className='rank'>
                            <span>Rank:</span><span>{rank}</span>
                        </p>
                        <p className='score'>
                            <span>Score:</span><span>{score}</span>
                        </p>
                        <p className='scored_b'>
                            <span>Scored By:</span><span>{scored_by}</span>
                        </p>
                        <p className='popularity'>
                            <span>Popularity:</span><span>{popularity}</span>
                        </p>
                        <p className='status'>
                            <span>Status:</span><span>{status}</span>
                        </p>
                        <p>
                            <span className='source'>Source:</span><span>{source}</span>
                        </p>
                        <p>
                            <span className='season'>Season:</span><span>{season}</span>
                        </p>
                        <p>
                            <span className='duration'>Duration:</span><span>{duration}</span>
                        </p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less' : 'Read More'}</button>
                </p>
            </div>
            <h3 className="title">Trailer</h3>
            <div className="trailer-container">
                {trailer?.embed_url ?
                    <iframe
                        src={`${trailer.embed_url}?autoplay=0&controls=1`}
                        title="Inline Frame Example"
                        width="800"
                        height="450"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> :
                    <h3>Trailer not available</h3>
                }
            </div>
            <h3 className="title">Characters</h3>
            <div className="characters">
                {characters?.map((character, index) => {
                    const { role } = character
                    const { images, name, mal_id } = character.character

                    const formattedName = name
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/,\s*/g, '-')
                        .replace(/['"]/g, '')
                        .replace(/\s+/g, '-')
                        .toLowerCase();

                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className={`character ${formattedName}`} data-testid={formattedName} id={formattedName} >
                            <img src={images?.jpg.image_url} alt={name} className={formattedName} id={formattedName} />
                            <h4 className={formattedName} data-testid={formattedName}>{name}</h4>
                            <p className={`${role}-${formattedName}`}>{role}</p>
                        </div>
                    </Link>
                })}
            </div>
        </AnimeItemStyled >
    )
}



export default AnimeItemPage