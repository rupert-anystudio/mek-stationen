import styled from 'styled-components'
import PillButton from '../PillButton'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`

const LanguageSwitch = ({
  langs = [],
  onLangSelect,
  currentLang,
}) => {
  return (
    <Wrap>
      {langs.map(({ key, label }) => {
        return (
          <PillButton
            key={key}
            label={label}
            onClick={() => onLangSelect(key)}
            isActive={currentLang === key}
          />
        )
      })}
    </Wrap>
  )
}

export default LanguageSwitch