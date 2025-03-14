import styled from "styled-components";
import { theme } from "../../theme";

export const PopularStyled = styled.div`
    display: flex;
    flex-direction: column; 

    .airing-anime {
        margin-top: 2rem;
        padding: 2rem 1rem; 
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1.5rem;
        background-color: #fff;
        border-top: 5px solid ${theme.lightGray};

        a {
            height: 400px; 
            border-radius: 7px;
            border: 5px solid ${theme.lightGray};
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    @media (max-width: 1024px) {
        .airing-anime {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 1rem;
        }
    }

    @media (max-width: 768px) {
        .airing-anime {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            padding: 1rem;
        }

        a {
            height: 300px;
        }
    }

    @media (max-width: 480px) {
        .airing-anime {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            grid-gap: 0.5rem;
        }

        a {
            height: 250px;
        }
    }
`;
