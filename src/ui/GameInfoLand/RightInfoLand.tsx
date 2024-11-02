import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const RightInfoLand = React.memo(() => {
  
  return (
    <RightInfoBox>
      <H>
        Right info
      </H>
    </RightInfoBox>
  )
})
export default RightInfoLand


const RightInfoBox = styled.div`
  ${center};
  width: var(--right-info-w);
  height: 100%;
  background-color: plum;
`

const H = styled.h2`
  width: fit-content;
`