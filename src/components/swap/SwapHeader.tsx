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

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <div>
          <TYPE.black fontWeight={500} style={{ fontSize: "1.875rem" }}>Buy-Sell</TYPE.black>
          <TYPE.black fontWeight={500} style={{ fontSize: "1rem", opacity: "0.5" }}>Buy and sell coins instantly</TYPE.black>
        </div>   

        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
