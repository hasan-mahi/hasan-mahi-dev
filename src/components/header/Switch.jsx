import React from "react";
import styled from "styled-components";

const Switch = ({ isOpen, onToggle }) => {
  return (
    <StyledWrapper>
      <label className="hamburger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => onToggle(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          role="switch"
        />
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" >
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="line"
            d="M7 16 27 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
    display: inline-block;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Switch;
