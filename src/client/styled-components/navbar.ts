import styled, { css } from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`;
export const ColorNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const LargeNav = styled.nav<NavProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;

  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }

  .logo {
    flex: 2;
    color: var(--text);
    font-size: 32px;
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

interface NavProps {
  isScrolled?: boolean;
}
