import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
color: ${pr => pr.theme.textColor};
`

export default function NasaHeader(props) {
    return (
    <StyledHeader>
        <h1>NASA picture of the day!</h1>
    </StyledHeader>
    )
}