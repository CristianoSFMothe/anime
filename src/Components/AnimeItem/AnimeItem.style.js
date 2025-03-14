import styled from "styled-components";
import { theme } from "../../theme";

export const AnimeItemStyled = styled.div`
    padding: 3rem 18rem;
  background-color: ${theme.background};

  @media (max-width: 1200px) {
    padding: 3rem 10rem;
  }

  @media (max-width: 900px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }

  h1 {
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: ${theme.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .4s ease-in-out;

    &:hover {
      transform: skew(-3deg);
    }
  }

  .title {
    display: inline-block;
    font-size: 2rem;
    margin: 3rem 0;
    cursor: pointer;
    background: ${theme.gradientAlt};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    margin-top: 2rem;
    color: ${theme.textColor};
    line-height: 1.7rem;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: ${theme.green};
      font-weight: 600;
    }    
  }

  .trailer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    iframe {
      max-width: 100%;
      width: 800px;
      height: 450px;
      outline: none;
      border: 5px solid ${theme.lightGray};
      padding: 1.5rem;
      border-radius: 10px;
      background-color: ${theme.white};
    }

    @media (max-width: 900px) {
      iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
      }
    }
  }

  .details {
    background-color: ${theme.white};
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid ${theme.lightGray};

    .detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      img {
        border-radius: 7px;
        width: 100%;
        max-width: 350px;
        height: auto;
      }
    }

    .anime-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        display: flex;
        gap: 1rem;
      }
      p span:first-child {
        font-weight: 600;
        color: ${theme.darkGray};
      }
    }

    @media (max-width: 768px) {
      .detail {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  }

  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 1.5rem;
    background-color: ${theme.white};
    padding: 2rem;
    border-radius: 20px;
    border: 5px solid ${theme.lightGray};
    
    .character {
      padding: .4rem .6rem;
      border-radius: 7px;
      background-color: ${theme.background};
      transition: all .4s ease-in-out;
      text-align: center;

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 7px;
      }

      h4 {
        padding: .5rem 0;
        color: ${theme.darkGray};
        font-size: 1.1rem;
      }

      p {
        color: ${theme.green};
        font-size: 0.9rem;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      padding: 1.5rem;
    }

    @media (max-width: 400px) {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      padding: 1rem;
    }
  }
`;
