import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const LeftInfoLand = React.memo(() => {
  
  return (
    <LeftInfoBox>
      <H>
        Left info (Buttons)
      </H>
    </LeftInfoBox>
  )
})
export default LeftInfoLand


const LeftInfoBox = styled.div`
  width: var(--left-info-w);
  height: 100%;
  background-color: #8cd9df;
  ${center};
  writing-mode: vertical-rl;
  text-orientation: sideways;
`

const H = styled.h2`
  width: fit-content;
  rotate: 0.5turn
`
