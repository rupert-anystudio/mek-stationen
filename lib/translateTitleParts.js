const translateTitleParts = (titleParts, currentLang) => {
  const parts = titleParts[currentLang] || titleParts.de || []
  return parts.map((part, index) => ({ key: `${currentLang}-${index}`, ...part }))
}

export default translateTitleParts