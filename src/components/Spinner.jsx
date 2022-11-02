import styled from "@emotion/styled";
import "../styles/Spinner.css";

const Contenedor = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <Contenedor>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </Contenedor>
  );
};

export default Spinner;
