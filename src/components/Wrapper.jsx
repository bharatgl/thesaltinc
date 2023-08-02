import styled from "styled-components";
import "../App.css";

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left:10%;
  z-index: -1;

  ${"" /* background: #1f1144; */} canvas {
    width:100%;
    height: 100%;
  }
`;


export default Wrapper;
