import { props as peacock } from './peacock'
import { props as spanflechten } from './spanflechten'
import { props as lebendebruecken } from './lebendebruecken'

const props = {
  pages: {
    peacock,
    spanflechten,
    lebendebruecken,
  }
}

export default function Page() {
  return null
}

export async function getStaticProps() {
  return {
    props
  }
}
