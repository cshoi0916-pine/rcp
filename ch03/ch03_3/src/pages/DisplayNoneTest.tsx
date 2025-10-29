import {Title} from "../components"

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visiblity: visible text</p>
        <p className="invisible">visiblity: hidden text</p>
        <p className="visible">display: none text</p>
      </div>
    </section>
  )
}
