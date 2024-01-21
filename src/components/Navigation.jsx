import styled from "styled-components";
import useScrollHeight from "../hooks/useScrollHeight";
import useScreenSize from "../hooks/useScreenSize";

const Wrapper = styled.nav`
  top: 0;
  left: 0;
  position: sticky;

  box-shadow: ${(props) => props.$scrollHeight > 40 && "var(--shadow-1)"};
  background-color: #ced4da;
  padding: 2em;
  transition: all 0.3s;
`;

function Navigation() {
  const { scrollHeight } = useScrollHeight();
  const { screenWidth } = useScreenSize();

  return (
    <Wrapper $scrollHeight={scrollHeight} className="text-center">
      NAVIGATION
    </Wrapper>
  );
}
export default Navigation;
