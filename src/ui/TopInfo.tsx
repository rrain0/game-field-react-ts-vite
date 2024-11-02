import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import center = EmotionCommon.center


const TopInfo = React.memo(() => {
  
  return (
    <TopInfoBox>
      <H>
        Top info
      </H>
    </TopInfoBox>
  )
})
export default TopInfo


const TopInfoBox = styled.div`
  ${center};
  width: 100%;
  height: 70px;
  background-color: #8cd9df;
`

const H = styled.h2`
  width: fit-content;
`
