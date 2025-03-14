import styled from "styled-components";
import { theme } from "../../theme";

export const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #fff;
    border-top: 5px solid ${theme.lightGray};
    padding: 2rem;

    @media screen and (max-width: 1024px) {
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }

    h3 {
        text-align: center;
        font-size: 1.5rem;

        @media screen and (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media screen and (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    .anime {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 200px;
        margin: 0 auto;

        @media screen and (max-width: 768px) {
            max-width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: .4rem;
            color: ${theme.green};
            text-decoration: none;
            transition: all .3s ease-in-out;
            width: 100%;

            &:hover {
                transform: scale(1.05);
            }

            @media screen and (max-width: 768px) {
                width: 45%;
            }

            @media screen and (max-width: 480px) {
                width: 90%;
            }
        }

        img {
            width: 100%;
            border-radius: 5px;
            border: 5px solid ${theme.lightGray};
            transition: all .3s ease-in-out;

            @media screen and (max-width: 768px) {
                width: 100px;
            }

            @media screen and (max-width: 480px) {
                width: 80px;
            }
        }

        h5 {
            font-size: 1rem;

            @media screen and (max-width: 768px) {
                font-size: 0.9rem;
            }

            @media screen and (max-width: 480px) {
                font-size: 0.8rem;
            }
        }
    }
`;
