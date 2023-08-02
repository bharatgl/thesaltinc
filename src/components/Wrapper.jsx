import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  ${"" /* background: #1f1144; */} canvas {
    width: 700px;
    height: 700px;
  }
`;

const Star = () => {
  return (
    <>
      <div id="star"></div>
      <div id="star1"></div>
      <div id="star2"></div>
      <div id="star3"></div>
    </>
  );
};

export default Wrapper;
