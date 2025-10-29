import {Component} from "react"

export default class App extends Component {
  render() {
    const isLoading = true
    if (isLoading) return <p>loading...</p>

    const children = (
      <li>
        <a href="http://www.goole.com">
          <p>go to Google</p>
        </a>
      </li>
    )
    return (
      <div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <ul>{children}</ul>}
      </div>
    )
  }
}
