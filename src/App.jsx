import "./App.css";
import styled from "styled-components";
import Navigation from "./components/Navigation";

const Wrapper = styled.main`
  position: relative;
  min-height: 300vh;
  background-color: #ced4da;
`;

function App() {
  return (
    <Wrapper className="">
      <Navigation />
    </Wrapper>
  );
}

export default App;
