import styled from "styled-components";

export const Box = styled.div`
padding: 80px 60px;
background: black;
// position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
padding: 70px 30px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center ;
max-width: 1000px;
margin: 0 auto; 
`

export const Column = styled.div`
display: grid;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
 `;

export const FooterLink = styled.i`
color: #fff;
margin-bottom:20px;
font-size: 0.9rem;
text-decoration:none;
font-style: normal;
flex:inline-flex;
order:1;
flex-grow: 0;
margin: 0px 16px;

&:hover{
color: pink;
transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 1rem;
color: #fff;
margin-bottom:40px;
font-weight: bold;

&:hover {
color: blue;
transition: 200ms ease-in
`;




