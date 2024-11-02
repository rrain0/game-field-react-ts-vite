import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const BottomInfoPort = React.memo(() => {
  
  return (
    <BottomInfoBox>
      <H>
        Bottom info
      </H>
    </BottomInfoBox>
  )
})
export default BottomInfoPort


const BottomInfoBox = styled.div`
  width: 100%;
  height: var(--bottom-info-h);
  background-color: plum;
  ${center};
`

const H = styled.h2`
  width: fit-content;
`