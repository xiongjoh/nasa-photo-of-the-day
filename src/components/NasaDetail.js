import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  width: 50%;
  margin: auto;
  box-shadow: ${pr => pr.theme.boxShadow};
  border-radius: 2%;
  padding: 2% 1%;
  color: ${pr => pr.theme.textColor};
  font-family: ${pr => pr.theme.fontSansCaption};

  img {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 550px) {
      width: 90%;
  }
  @media (max-width: 900px) {
      width: 75%;
  }
`;

export default function NasaDetails({ url, title, author, date, explanation }) {

  if (!url) return <h3>Loading...</h3>;

  return (
    <StyledDetails className="container">
      <img src={url} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{date}</p>
      <p>{explanation}</p>
    </StyledDetails>
  );
}
