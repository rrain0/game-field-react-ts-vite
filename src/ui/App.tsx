import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import FieldLand from 'src/ui/Field/FieldLand'
import FieldPort from 'src/ui/Field/FieldPort'
import FieldSquare from 'src/ui/Field/FieldSquare'
import FieldDynamicIframe from 'src/ui/Field/FieldDynamicIframe'
import GameInfoLand from 'src/ui/GameInfoLand/GameInfoLand'
import LeftInfoLand from 'src/ui/GameInfoLand/LeftInfoLand'
import RightInfoLand from 'src/ui/GameInfoLand/RightInfoLand'
import GameInfoPort from 'src/ui/GameInfoPort/GameInfoPort'
import BottomInfoPort from 'src/ui/GameInfoPort/BottomInfoPort'
import TopInfoPort from 'src/ui/GameInfoPort/TopInfoPort'
import rowWrap = EmotionCommon.rowWrap

const App = React.memo(() => {

  return (
    <>
      
      <Global
        styles={css`
          #root {
            display: flex;
            flex-flow: column nowrap;
            padding: 16px 16px 512px;
            gap: 16px;
          }
        `}
      />
      
      
      
      <Text>Каждое мини-окошко можно ресайзить мышкой</Text>
      
      
      
      
      <Text>Window portrait - Field square</Text>
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldSquare />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldSquare />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      
      <Text>Window portrait - Field portrait</Text>
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldPort />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldPort />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      <Text>Window portrait - Field landscape</Text>
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldLand />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldLand />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      
      
      
      
      <Text>Window landscape - Field square</Text>
      
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldSquare />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldSquare />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
      
      
      <Text>Window landscape - Field portrait</Text>
      
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldPort />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldPort />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
      
      
      <Text>Window landscape - Field landscape</Text>
      
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldLand />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldLand />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
      
      <Text>Window portrait - Field dynamic iframe</Text>
      <Text>В консоли выберите iframe поля и установите aspect ratio с помощью window.setAspectRatio(1/2)</Text>
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldDynamicIframe />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        {/* <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldSquare />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm> */}
      
      </div>
      
      
      
    </>
  )
})
export default App


const Text = styled.div`
  ${rowWrap};
  gap: 16px;
`


const WindowPort = styled.div`
  width: 360px;
  height: 740px;
  resize: both;
  overflow: hidden;
`
const WindowPortSm = styled(WindowPort)`
  width: 320px;
  height: 540px;
`
const WindowLand = styled.div`
  width: 1920px;
  height: 1080px;
  resize: both;
  overflow: hidden;
`
const WindowLandSm = styled(WindowLand)`
  width: 922px;
  height: 487px;
`

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
  padding: 16px;
`
