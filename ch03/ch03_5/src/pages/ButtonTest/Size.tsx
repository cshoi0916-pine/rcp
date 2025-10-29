import {Button} from "../../theme/daisyui"

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">Size</h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg">BTN-LG</Button>
        <Button className="btn-md">BTN-MD</Button>
        <Button className="btn-sm">BTN-SM</Button>
        <Button className="btn-xs">BTN-XS</Button>
      </div>
    </section>
  )
}
