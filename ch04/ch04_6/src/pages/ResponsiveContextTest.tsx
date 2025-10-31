import {Title, Subtitle} from "../components"
import {useResonsive} from "../contexts"

export default function ResponsiveContextTest() {
  const breakpoint = useResonsive()
  return (
    <section className="mt-4">
      <Title>ResponsiveContextTest</Title>
      <div className="mt-4">
        <Subtitle>breakpoint: {breakpoint}</Subtitle>
      </div>
    </section>
  )
}
