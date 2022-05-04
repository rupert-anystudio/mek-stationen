import Chapters from '../components/Chapters'

export default function Home({ chapters }) {
  return (
    <>
      <Chapters chapters={chapters} />
    </>
  )
}

export async function getStaticProps() {

  const chapters = [
    {
      key: 'First',
      title: 'First Chapter',
      titleSkewed: {
        en: [
          { offset: 1.9, value: 'A chair' },
          { offset: 0, value: 'as an icon of' },
          { offset: 2.4, value: 'popculture' },
          { offset: 6, value: '& politics' },
        ],
        de: [
          { offset: 1.9, value: 'Ein Stuhl' },
          { offset: 0, value: 'als Ikone für' },
          { offset: 2.4, value: 'Popkutlur' },
          { offset: 6, value: '& Politik' },
        ],
      }
    },
    {
      key: 'Second',
      title: 'Second Chapter',
      titleSkewed: {
        en: [],
        de: [],
      },
    },
    {
      key: 'Third',
      title: 'Third Chapter',
      titleSkewed: {
        en: [],
        de: [],
      },
    },
    {
      key: 'Fourth',
      title: 'Fourth Chapter',
      titleSkewed: {
        en: [],
        de: [],
      },
    },
    {
      key: 'Fifth',
      title: 'Fifth Chapter',
      titleSkewed: {
        en: [],
        de: [],
      },
    },
  ]
  return {
    props: {
      chapters
    }
  }
}
