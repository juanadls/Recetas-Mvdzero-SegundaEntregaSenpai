import styled from "styled-components";

export const TitleHfour = styled.h4`
font-size: 20px;
font-family:Georgia, 'Times New Roman', Times, serif;
color: rgb(16, 150, 105);
`;

export const FooterPage = styled.footer`
display: block;
bottom: 0;
padding: 0;
margin: 0;
width: 100vw;
background-color: rgb(3, 66, 14); 
color: white;
text-align: justify;
`;

export const FooterText = styled.p`
margin-top: 2%;
text-align: justify;
font-weight: 600;
margin-left: 0;
`;

export const GroupOne = styled.div`
width: 100%;
max-width: 1200px;
margin:auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 50px;
padding: 45px 0px;
color: white;
`;

export const GroupTwo = styled.div`
background-color: rgb(233, 235, 240);
padding: 15px 10px;
text-align: center;
color: rgb(252, 248, 248);
`;

export const GroupTwoSmall = styled.small`
font-size: 15px;
color: rgb(2, 39, 27);
`;

export const SocialMediaAnchor = styled.a`
display: inline-block;
text-decoration: none;
color:rgb(221, 234, 236);
text-align: center;
padding: 8px;
`;


export const SocialMediaAnchorHover = styled.a`
color: rgb(21, 124, 64);
transition: .2s;
`;







