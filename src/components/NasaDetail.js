import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  width: 50%;
  margin: auto;
  box-shadow: 0 0 15px rgb(210, 210, 210);
  border-radius: 2%;
  padding: 2% 1%;

  img {
    width: 90%;
    margin: auto;
  }
`;

export default function NasaDetails(props) {
  const { url, title, author, date, explanation } = props;
  console.log(props.url);

  if (!props.url) return <h3>Loading...</h3>;

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
