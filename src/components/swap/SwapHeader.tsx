import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 659px;
  color: ${({ theme }) => theme.text2};
`
export const StyledMenuButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: auto;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 8px 20px 8px 0;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`
export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <div>
          <TYPE.black fontWeight={500} style={{ fontSize: "1.875rem" }}>Buy-Sell</TYPE.black>
          <TYPE.black fontWeight={500} style={{ fontSize: "1rem", opacity: "0.5" }}>Buy and sell coins instantly</TYPE.black>
        </div>   
        <StyledMenuButton>
          <Settings />
        </StyledMenuButton>
      </RowBetween>
    </StyledSwapHeader>
  )
}
