import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  function handleChange(e) {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('language', e.target.value)
  }

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className='bg-transparent outline-0 cursor-pointer'
    >
      <option className='bg-jean' value='en'>
        English
      </option>

      <option className='bg-jean' value='jp'>
        日本語
      </option>

      <option className='bg-jean' value='fr'>
        Français
      </option>
    </select>
  )
}
