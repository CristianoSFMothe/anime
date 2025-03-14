import styled from "styled-components";
import { theme } from "../../theme";

export const PopularStyled = styled.div`
    display: flex;
    .upcoming-anime {
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        background-color: #fff;
        border-top: 5px solid ${theme.lightGray};

        a {
            height: 500px;
            border-radius: 7px;
            border: 5px solid ${theme.lightGray};
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    @media (max-width: 1200px) {
        .upcoming-anime {
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }

    @media (max-width: 992px) {
        .upcoming-anime {
            padding-left: 2rem;
            padding-right: 2rem;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }

    @media (max-width: 768px) {
        .upcoming-anime {
            padding-left: 1rem;
            padding-right: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            a {
                height: 400px;
            }
        }
    }

    @media (max-width: 576px) {
        .upcoming-anime {
            padding-left: 0;
            padding-right: 0;
            grid-template-columns: 1fr;
        }

        .upcoming-anime a {
            height: 300px;
        }
    }
`;

