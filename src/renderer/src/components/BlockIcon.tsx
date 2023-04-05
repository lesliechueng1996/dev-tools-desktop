type Props = {
  iconName: string
  className?: string
  onClick?: () => void
}

function BlockIcon({ iconName, className, onClick }: Props): JSX.Element {
  return (
    <i
      className={`pi ${iconName} p-2 cursor-pointer hover:surface-300 border-round-md ${className}`}
      onClick={(): void => {
        onClick && onClick()
      }}
    />
  )
}

export default BlockIcon
