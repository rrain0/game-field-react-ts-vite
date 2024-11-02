import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const BottomInfo = React.memo(() => {
  
  return (
    <BottomInfoBox>
      <H>
        Bottom info
      </H>
    </BottomInfoBox>
  )
})
export default BottomInfo


const BottomInfoBox = styled.div`
  ${center};
  width: 100%;
  height: 160px;
  background-color: plum;
`

const H = styled.h2`
  width: fit-content;
`