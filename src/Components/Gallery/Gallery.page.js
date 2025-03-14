import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/global'
import { GalleryStyled } from './Gallery.page.style';


function GalleryPage() {
    const { getAnimePictures, pictures } = useGlobalContext()
    const { id } = useParams();

    //state
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={() => {
                        handleImageClick(i)
                    }} key={i}>
                        <img
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt=""
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}



export default GalleryPage