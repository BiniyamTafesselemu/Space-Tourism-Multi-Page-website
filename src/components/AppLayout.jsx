import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

function AppLayout() {
  const location = useLocation();
  const pageLocation = location.pathname.split("/")[1];

  return (
    <StyledAppLayout pageLocation={pageLocation}>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent> 
    </StyledAppLayout>
  );
}

export default AppLayout;

// STYLED COMPONENTS
// This is a styled component for the AppLayout component. It uses the styled-components library to create a div with specific styles based on the pageLocation prop.

const StyledAppLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => "pageLocation" !== prop,
})`
  background-image: ${(props) =>
    `url("/images/${props.pageLocation}/background-${props.pageLocation}-mobile.jpg")`};

  @media screen and (min-width: 768px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-tablet.jpg")`};
  }

  @media screen and (min-width: 1024px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-desktop.jpg")`};
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  min-height: 100svh;
  position: relative;
`;

const MainContent = styled.main`
  max-width: ${breakpoints.md};
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media screen and (min-width: ${breakpoints.sm}) {
    margin: 3rem auto;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 4rem auto;
    align-items: flex-start;
  }
`;
