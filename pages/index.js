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
      titleParts: {
        en: [
          { offset: 1.9, value: 'A chair' },
          { offset: 0, value: 'as an icon of' },
          { offset: 2.4, value: 'popculture' },
          { offset: 6, value: '& politics' },
        ],
        de: [
          { offset: .8, value: 'Ein Stuhl' },
          { offset: 0, value: 'als Ikone für' },
          { offset: 2.6, value: 'Popkutlur' },
          { offset: 4.6, value: '& Politik' },
        ],
      },
      content: [
        {
          type: 'quote',
          value: {
            de: 'Die größten Stars der 1960er und 1970er Jahre, wie Elizabeth Taylor, Cher, Dolly Parton, Donna Summer und John F. Kennedy, saßen darauf. Dieser Stuhl ist mehr als ein bloßes Foto-Requisit:',
            en: 'Die größten Stars der 1960er und 1970er Jahre, wie Elizabeth Taylor, Cher, Dolly Parton, Donna Summer und John F. Kennedy, saßen darauf. Dieser Stuhl ist mehr als ein bloßes Foto-Requisit:',
          },
        },
        {
          type: 'text',
          value: {
            de: 'Kommt Ihnen dieser Stuhl bekannt vor? Der sogenannte Peacock Chair (dt. Pfauen Sessel) erzählt über 100 Jahre Weltgeschichte – von Popkultur über Identität bis zu kolonialen Verflechtungen. Benannt nach seiner besonderen Lehne, die an das Rad eines Pfaus erinnert, ist dieser Stuhl auf zahlreichen Fotografien schon seit Anfang des 20. Jahrhunderts zu finden. Doch was macht diesen Stuhl so besonders?',
            en: 'Kommt Ihnen dieser Stuhl bekannt vor? Der sogenannte Peacock Chair (dt. Pfauen Sessel) erzählt über 100 Jahre Weltgeschichte – von Popkultur über Identität bis zu kolonialen Verflechtungen. Benannt nach seiner besonderen Lehne, die an das Rad eines Pfaus erinnert, ist dieser Stuhl auf zahlreichen Fotografien schon seit Anfang des 20. Jahrhunderts zu finden. Doch was macht diesen Stuhl so besonders?',
          },
        },
      ],
    },
    {
      key: 'Second',
      title: 'Second Chapter',
      titleParts: {
        en: [],
        de: [],
      },
      content: [],
    },
    {
      key: 'Third',
      title: 'Third Chapter',
      titleParts: {
        en: [],
        de: [],
      },
      content: [],
    },
    {
      key: 'Fourth',
      title: 'Fourth Chapter',
      titleParts: {
        en: [],
        de: [],
      },
      content: [],
    },
    {
      key: 'Fifth',
      title: 'Fifth Chapter',
      titleParts: {
        en: [],
        de: [],
      },
      content: [],
    },
  ]
  return {
    props: {
      chapters
    }
  }
}
