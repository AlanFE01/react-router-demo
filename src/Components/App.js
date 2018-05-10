import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Writers from './Writers'
import NotFound from './Errors/404'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      writers: []
    }
  }
  async componentDidMount() {
    const writers =await (await fetch('http://localhost:3004/writers?_embed=texts')).json()
    this.setState({ writers })
  }

  render() {
    const { writers } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">
                首页
              </Link>
            </li>
            <li>
              <Link to="/writers">
                writers
              </Link>
            </li>
          </ul>

          <hr/>
          <Switch>
            <Route path="/" exact render={() => <div>home</div>} />
            <Route path="/writers" render={(props) => <Writers {...props} writers={writers} />} />
            <Route component={NotFound}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
