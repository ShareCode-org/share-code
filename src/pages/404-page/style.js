import styled from "styled-components";
import { ReactComponent as ErrorSvg } from "../../assests/error.svg";

export const ErrorDivContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ErrorDivContentContainer = styled.div`
    margin: 8%;
`;

export const ErrorDivH1 = styled.h1`
    font-size: 100px;
    color: darkblue;
    text-transform: uppercase;
`;

export const ErrorDivP = styled.p`
    font-size: 20px;
    color: blue;
`;

export const ErrorImg = styled(ErrorSvg)`
    position: relative;
    top: 15px;
    right: 40px;
    width: 600px;
    height: 600px;
`;