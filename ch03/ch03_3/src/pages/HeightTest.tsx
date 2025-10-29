import {Title, Div} from "../components"

export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <Div className="mt-4">
        <Div className="bg-blue-500 h-1/2">
          <p className="text-center text-red-50">h-1/2</p>
        </Div>
        <Div className="bg-red-500 h-20">
          <p className="text-center text-red-50">h-20</p>
        </Div>
      </Div>
    </section>
  )
}
