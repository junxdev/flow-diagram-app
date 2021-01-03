import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    margin: 0;
    padding: 0;
`;

// 문단
const Paragraph = ({ text }) => {

    return (
        <>
            <P>
                {text}
            </P>
        </>
    );
}

export default Paragraph;