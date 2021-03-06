import styled from 'styled-components'
import SkewedTitleSheet from './contentBlocks/SkewedTitleSheet'
import Text from './contentBlocks/Text'
import Quote from './contentBlocks/Quote'
import Images from './contentBlocks/Images'
import Fixed from './contentBlocks/Fixed'
import Video from './contentBlocks/Video'

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: white;
`

const Chapter = ({ titleParts, content, wrapRef, id }) => {
  return (
    <Wrap ref={wrapRef} id={id}>
      {titleParts.length > 0 && <SkewedTitleSheet parts={titleParts} />}
      {content.map(({ type, key, ...rest }) => {
        if (type === 'text') return <Text key={key} {...rest} />
        if (type === 'quote') return <Quote key={key} {...rest} />
        if (type === 'images') return <Images key={key} {...rest} />
        if (type === 'fixed') return <Fixed key={key} {...rest} />
        if (type === 'video') return <Video key={key} {...rest} />
        return null
      })}
    </Wrap>
  )
}

export default Chapter