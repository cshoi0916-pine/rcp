import type {FC} from "react"
import {Div, Title, Subtitle} from "../components"

export type ClockProps = {
  today: Date
}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    // <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
    <Div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Title className="text-5xl">{today.toLocaleDateString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleTimeString()}</Subtitle>
    </Div>
  )
}

export default Clock
