import { PanelMenu } from 'primereact/panelmenu'
import SearchBar from './SearchBar'
import FavoriteMenu from './FavoriteMenu'

type Props = {
  className?: string
}

const items = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link'
      }
    ]
  }
]

function AsideMenu({ className }: Props): JSX.Element {
  return (
    <aside className={`surface-200 h-screen overflow-y-auto px-3 py-2 ${className}`}>
      <SearchBar />
      <FavoriteMenu />
      <PanelMenu model={items} />
    </aside>
  )
}

export default AsideMenu
