import styled from "@emotion/styled";

const SnippetCard = styled.div`
    height:320px;
    border:2px solid #595959;
    transition : transform .3s;
    cursor : pointer;


    &:hover{
      box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
      transform: scale(1.05);
    }

    & .pl-icon{
        height:150px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: ${props => props.coverColor};
        & .icon{
          font-size:100px;
        }
    }
    & .card-details{
      height: 100%;
    }
    & .card-description{
      margin-bottom : 1em;
    }

    & .card-btn{
      position:relative;
      bottom : 0;
    }

    @media (min-width: 580px) {
        height:360px;
      }

      @media (max-width: 579px) {
        min-width:249px;
        max-width:250px;
        height:400px;
        justify-self: center;
        & .card-description{
          margin-bottom : 3em;
        }
      }

`
export default SnippetCard;