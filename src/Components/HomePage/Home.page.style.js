import styled from "styled-components";
import { theme } from "../../theme";

export const HomepageStyled = styled.div`
    background-color: ${theme.background};

    header {
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;

        @media screen and (max-width: 1530px) {
            width: 95%;
        }

        @media screen and (max-width: 1024px) {
            padding: 2rem 3rem;
        }

        @media screen and (max-width: 768px) {
            padding: 2rem 1.5rem;
        }

        @media screen and (max-width: 480px) {
            padding: 1.5rem 1rem;
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            text-align: center;

            h1 {
                font-size: 2rem;
            }

            @media screen and (max-width: 768px) {
                h1 {
                    font-size: 1.5rem;
                }
            }

            @media screen and (max-width: 480px) {
                h1 {
                    font-size: 1.2rem;
                }
            }
        }

        .search-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                align-items: stretch;
                gap: 0.8rem;
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                padding: .7rem 1.5rem;
                outline: none;
                border-radius: 30px;
                font-size: 1.2rem;
                background-color: #fff;
                cursor: pointer;
                transition: all .4s ease-in-out;
                font-family: inherit;
                border: 5px solid ${theme.lightGray};
                width: auto;
                min-width: 120px;
                text-align: center;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    font-size: 1rem;
                    padding: 0.6rem 1rem;
                }
            }

            form {
                position: relative;
                width: 100%;
                max-width: 500px;

                .input-control {
                    position: relative;
                    transition: all .4s ease-in-out;
                }

                .input-control input {
                    width: 100%;
                    padding: .7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    background-color: #fff;
                    border: 5px solid ${theme.lightGray};
                    transition: all .4s ease-in-out;

                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                        padding: 0.6rem 1rem;
                    }
                }

                .input-control button {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 0.6rem 1rem;

                    @media screen and (max-width: 768px) {
                        padding: 0.5rem 0.8rem;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;
