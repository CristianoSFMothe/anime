import styled from "styled-components";
import { theme } from "../../theme";

export const GalleryStyled = styled.div`
    background-color: ${theme.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;
        a {
            font-weight: 600;
            text-decoration: none;
            color: #EB5757;
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }

    .big-image {
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: #fff;
        border-radius: 7px;
        border: 5px solid ${theme.lightGray};
        position: relative;
        img {
            width: 100%;
            max-width: 350px;
        }
    }

    .small-images {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        width: 90%;
        max-width: 800px;
        padding: 1.5rem;
        border-radius: 7px;
        background-color: #fff;
        border: 5px solid ${theme.lightGray};
        justify-content: center;
        
        img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            border: 3px solid ${theme.lightGray};
        }
    }

    @media (max-width: 768px) {
        .back {
            top: 1rem;
            left: 1rem;
            a {
                font-size: 0.9rem;
            }
        }

        .big-image {
            padding: 1.5rem;
            margin: 1.5rem 0;
            img {
                max-width: 300px;
            }
        }

        .small-images {
            padding: 1rem;
            img {
                width: 4rem;
                height: 4rem;
            }
        }
    }

    @media (max-width: 480px) {
        .big-image {
            padding: 1rem;
            margin: 1rem 0;
            img {
                max-width: 250px;
            }
        }

        .small-images {
            padding: 0.8rem;
            img {
                width: 3.5rem;
                height: 3.5rem;
            }
        }
    }
`;
