import type {FC, CSSProperties} from "react"

export type IconProps = {
  name: string
  style?: CSSProperties
  className?: string
}

export const Icon: FC<IconProps> = ({name, style, className}) => {
  return (
    <span className="material-icons" style={style}>
      {/* <span className={`material-icons ${className ?? ''}`} style={style}> */}
      {name}
    </span>
  )
}
