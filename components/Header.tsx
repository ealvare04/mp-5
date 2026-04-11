import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #A47251;
    padding: 1rem;
`;

const StyledTitle = styled.h2`
    color: white;
    margin: 0;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>
                URL Shortener App
            </StyledTitle>
        </StyledHeader>
    );
}