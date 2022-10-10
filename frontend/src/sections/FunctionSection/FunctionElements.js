import styled from "styled-components"

export const FunctionContainer =styled.div`
    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#282828')};
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 50px 0;
    
`

export const FunctionWrapper = styled.div`
    display: orid;
    z-index: 1;
    height: 450px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-let: auto;
    padding: 0 24px;
`

export const FunctionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, Ifr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? 
        `'col2 col1'`:
        `'col1 col2'`)}

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? 
        `'col1 col2'`:
        `'col1 col1 col2 col2'`)})}
    }
`

export const Column1 = styled.div`
    marding-bottom: 15px;
    padding: 0 15px;
    grid-area:col1;
`

export const Column2 = styled.div`
    marding-bottom: 15px;
    padding: 0 15px;
    grid-area:col1;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color:#efb73e;
font-size:16px;
font-weight: 700;
letter-spacing: 1.4px;
margin-bottom:16px;
`

export const Heading = styled.h1`
margin^bottom: 24px;
font-size: 48px;
line-height:1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};
@media screen and (max-width: 480px){
    font-size: 32px;

}
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width:555px;
height: 100%;
`

export const Img = styled.img`
 width:100%;
 margin: 0 0 10px 0;
 padding-right: 0;
`