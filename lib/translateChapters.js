import translateTitleParts from './translateTitleParts'

const returnAssetPath = (src, folder) => [folder, src].join('/')

const returnCombinedTitle = parts => parts.map(p => p.value).join(' ')

const translateValue = (valueRaw, currentLang) => {
  if (!valueRaw) return ''
  return valueRaw[currentLang] || valueRaw.de || ''
}

const translateImages = (imagesRaw, currentLang, assetFolder) => (imagesRaw || []).map(({ src, value }) => ({ src: returnAssetPath(src, assetFolder), value: translateValue(value, currentLang) }))

const translateContentBlock = (contentBlock, currentLang, assetFolder) => {
  const { type, ...block } = contentBlock
  if (type === 'text' || type === 'quote') return {
    type,
    value: translateValue(block?.value, currentLang),
  }
  if (type === 'images') return {
    type,
    images: translateImages(block?.images, currentLang, assetFolder),
  }
  if (type === 'fixed') {
    return {
      type,
      image: {
        src: returnAssetPath(block?.image?.src, assetFolder),
        value: translateValue(block?.image?.value, currentLang),
      },
      coverImage: block?.coverImage,
      value: translateValue(block?.value, currentLang),
    }
  }
  return null
}

const translateContent = (contentRaw, currentLang, assetFolder) => contentRaw.reduce((acc, contentBlock, i) => {
  const key = `${currentLang}-${i}`
  const block = translateContentBlock(contentBlock, currentLang, assetFolder)
  if (!block) return acc
  return [...acc, { ...block, key }]
}, [])

const translateChapters = (chaptersRaw, currentLang, assetFolder) => chaptersRaw.reduce((acc, chapter, i) => {
  const id = `chapter-${i}`
  const key = id
  const index = i + 1
  const titleParts = translateTitleParts(chapter.titleParts, currentLang)
  const title = returnCombinedTitle(titleParts)
  const content = translateContent(chapter.content, currentLang, assetFolder)
  const base = {
    id,
    key,
    index,
    titleParts,
    title,
    content,
  }
  return [...acc, base]
}, [])

export default translateChapters