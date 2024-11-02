import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const TopInfoPort = React.memo(() => {
  
  return (
    <TopInfoBox>
      <H>
        Top info
      </H>
    </TopInfoBox>
  )
})
export default TopInfoPort


const TopInfoBox = styled.div`
  width: 100%;
  height: var(--top-info-h);
  background-color: #8cd9df;
  ${center};
`

const H = styled.h2`
  width: fit-content;
`
