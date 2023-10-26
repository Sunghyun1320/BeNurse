import React from "react";
import { StyledInput, IconWrapper } from "./Input.styles";
import { BiSearch } from "react-icons/bi";

export default function Input({ placeholder, width, variant }) {
  return (
    <div>
      {variant === "search" && (
        <IconWrapper>
          <BiSearch
            size={26}
            color="#555555"
          />
        </IconWrapper>
      )}
      <StyledInput
        type="text"
        placeholder={placeholder}
        width={width}
        variant={variant}
      />
    </div>
  );
}
