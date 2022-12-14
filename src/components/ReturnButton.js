import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiLeftArrow } from "react-icons/bi";
import { useLocation } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();
  let location = useLocation();

  function returnToPreviousPage() {
    navigate(-1);
  }
  return (
    <PositionReturn data-test="go-home-header-btn">
      {location.pathname === "/" ? (
        ""
      ) : (
        <BiLeftArrow onClick={() => returnToPreviousPage()} />
      )}
    </PositionReturn>
  );
}

const PositionReturn = styled.div`
  position: fixed;
  top: 22px;
  left: 20px;
  z-index: 5;
  font-size: 25px;

  color: #e8833a;
  cursor: pointer;

  &:hover {
    color: #eeab7b;
  }
`;
