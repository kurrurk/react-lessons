import styled from "styled-components";

//tagged template literals
const Button = styled.button
/*css*/ `
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  color: --panel;
  background: linear-gradient(90deg, #1c62ff, #37d6ff);
  cursor: pointer;
  transition: 0.25s;
  box-shadow: 0 0 10px rgba(55, 214, 255, 0.3);

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(55, 214, 255, 0.6);
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button">
//       {props.children}
//     </button>
//   );
// };

export default Button;
