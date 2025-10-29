import type {DragEvent} from "react"

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLInputElement>) =>
    console.log("onDragStart", e.dataTransfer)
  const onDragEnd = (e: DragEvent<HTMLInputElement>) =>
    console.log("onDragEnd", e.dataTransfer)

  const onDragOver = (e: DragEvent) => e.preventDefault()
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log(`onDrop`, e.dataTransfer)
  }
  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  )
}
