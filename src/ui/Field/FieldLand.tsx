import styled from '@emotion/styled'
import React from 'react'


const FieldLand = React.memo(() => {
  
  console.log('rerender FieldLand')
  
  return (
    <Field>
      
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
    
    </Field>
  )
})
export default FieldLand


const Field = styled.div`
  width: min( var(--field-max-w), calc( var(--field-max-h) * 4) );
  height: min( calc( var(--field-max-w) / 4), var(--field-max-h) );
  background-color: black;
  display: grid;
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(8, 12.5%);
`

const Cell = styled.div<{ color: 'w' | 'b' }>`
  background-color: ${p => ({ w: '#f0d9b5', b: '#b58863' }[p.color])};
`

