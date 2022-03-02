import styled from "@emotion/styled";

const MobileSideBar = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    transition: .4s;
    z-index:1000;
    left: ${props => props.show ? '0' : '-250px'};

`
export default MobileSideBar;