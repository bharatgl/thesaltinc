import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  ${"" /* background: #1f1144; */}
  canvas {
    width: 800px;
    height: 800px;
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
