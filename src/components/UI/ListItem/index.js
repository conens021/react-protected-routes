import styled from "@emotion/styled";

const ListItem = styled.li`
    cursor:pointer;
    width:80%;
    border-radius:10px;
    padding:.5em;
    display:flex;
    align-items:center;
    column-gap:.5em;
    transition:.1s;
    background-color: ${props => props.active ? '#303234' : ''};
    &:hover{
        background-color:${props => props.active ? '#303234' : 'rgb(48, 50, 52,0.2)'};
    }
    & .icon{
        font-size:21px;
    }
`

export default ListItem