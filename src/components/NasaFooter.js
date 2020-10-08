import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
color: ${pr => pr.theme.textColor};
width: 90%;
display: flex;
justify-content: center;
border: 1px solid red;
margin: auto;

a {
    text-decoration: none;
    font-size: bold;
    color:${pr => pr.theme.textColor};
    box-shadow: ${pr => pr.theme.boxShadow};
    padding: 3%;
}
`

export default function NasaFooter(props) {
    const {hdURL} = props
    return (
    <StyledFooter>
        <a href={hdURL}>View In HD</a>
    </StyledFooter>
    )
}