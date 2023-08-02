import styled from "styled-components";
import "../App.css";

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: -1;

  canvas {
    width: 500px;
    height: 500px;
  }
`;

export default Wrapper;
