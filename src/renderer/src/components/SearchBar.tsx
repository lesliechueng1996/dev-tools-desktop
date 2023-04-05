import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BlockIcon from './BlockIcon'
import './SearchBar.css'

function SearchBar(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const { t } = useTranslation()

  const searchTools = (event: AutoCompleteCompleteEvent): void => {
    console.log(event.query)
  }

  return (
    <div className="relative">
      <AutoComplete
        className="w-full border-bottom-2 border-round-md border-primary-500"
        inputClassName="w-full pr-8 search-input"
        placeholder={t('TypeToSearchForTools') ?? ''}
        value={inputValue}
        onChange={(e): void => setInputValue(e.value)}
        completeMethod={searchTools}
      />
      <div className="absolute top-50 right-0 pr-2 text-500 -mt-3">
        {inputValue && (
          <BlockIcon iconName="pi-times" className="mr-1" onClick={(): void => setInputValue('')} />
        )}
        <BlockIcon iconName="pi-search" />
      </div>
    </div>
  )
}

export default SearchBar
