import styled from "styled-components";

export const Body = styled.body`
margin:0px;
padding:0px;
background:black;
`;
export const Headerflex = styled.header`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:#F5FFFA;
padding:10px;
`;

export const Logo = styled.h1`
font-family:arial;
margin-0px;
padding-left:100px;
`;
export const Navbar = styled.a`
font-size:20px;
padding-right:20px;
color:black;
text-decoration:none;

&:hover{
    text-decoration:underline 2px blue;
}
`;

export const Linkslogin = styled.div`
display:inline;
padding-right:15px;

`;

export const Linkscampoacesso = styled.div`
display:inline;
font-size:20px;
padding-right:20px;



`;