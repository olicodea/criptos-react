import styled from "@emotion/styled";

const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Gantari", sans-serif;
    font-weight: 700;
    text-align: center;
`;

const Error = ({ children }) => {
  return <div>{children}</div>;
};

export default Error;
