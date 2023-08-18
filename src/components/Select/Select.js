import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* Allow the select to span the full height in Safari */
    -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 8px;
    color: ${COLORS.gray700};
    font-size: ${16 / 16}rem;
    background-color: ${COLORS.transparentGray15};

    ${NativeSelect}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: var(--size);
    height: var(--size);
    pointer-events: none;
`;

const Select = ({ label, id, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper aria-label={label}>
            <NativeSelect id={id} value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <PresentationalBit>
                {displayedValue}
                <IconWrapper style={{ "--size": "24px" }}>
                    <Icon id="chevron-down" size={24} />
                </IconWrapper>
            </PresentationalBit>
        </Wrapper>
    );
};

export default Select;
