import styled from "styled-components";

export const NavButton = styled.button<ButtonProps>`
  background-color: var(--bg);
  color: var(--text);
  padding: ${(props) => props.pad || "5"}px;
  padding-left: ${(props) => props.padL || "40"}px;
  padding-right: ${(props) => props.padR || "40"}px;
  padding-top: ${(props) => props.padT || "20"}px;
  padding-bottom: ${(props) => props.padB || "20"}px;
  margin: ${(props) => props.mar || "5"}px;
  margin-left: ${(props) => props.marL || "0"}px;
  margin-right: ${(props) => props.marR || "0"}px;
  margin-top: ${(props) => props.marT || "0"}px;
  margin-bottom: ${(props) => props.marB || "0"}px;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.fontSize || "16"}px;
  font-weight: ${(props) => props.fontWeight || "300"};
  border-width: ${(props) => props.borWidth || 0}px;
  border-color: ${(props) => props.borColor};
  border-style: ${(props) => props.borStyle};
  border-radius: ${(props) => props.borRadius || "10"}%;
  opacity: ${(props) => props.opacity || "1"};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.bgHover || "rgb(20,20,20)"};
    color: ${(props) => props.colorHover || "white"};
  }
`;
export const Button = styled(NavButton)`
    background-color: ${props => props.bgColor || "black"};
    color: ${props => props.color || "white"};
`

interface ButtonProps {
  bgColor?: any;
  color?: any;
  pad?: string;
  padL?: string;
  padR?: string;
  padT?: string;
  padB?: string;
  mar?: string;
  marL?: string;
  marR?: string;
  marT?: string;
  marB?: string;
  fontSize?: string;
  fontWeight?: string;
  borWidth?: string;
  borColor?: string;
  borStyle?: string;
  borRadius?: string;
  opacity?: string;
  bgHover?: string;
  colorHover?: string;
}
