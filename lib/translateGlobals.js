const translateGlobals = (globalsRaw, currentLang) => Object.entries(globalsRaw).reduce((acc, [key, value]) => ({
  ...acc,
  [key]: value[currentLang] || value.de || '',
}), {})

export default translateGlobals