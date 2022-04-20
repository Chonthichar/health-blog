import styled from 'styled-components'

export const Header = styled.h1`
text-align: center;
left: 50%;
color: green;
z-index: 10;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
z-index: 10;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 49%;
height: 20px;
font-size: 3rem
z-index: 10000;
cursor: pointer;
color: green;
font-size: 2rem;
top: 80%;
align-items: center;
display: flex;
`;

