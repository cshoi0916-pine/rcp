export default function App() {
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  const texts = ["hello", "world"].map((text, index) => <p key={index} children={text} />)
  // return <div>{texts}</div>
  return <div children={texts} />
}
