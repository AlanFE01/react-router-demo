import React, { Fragment } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import Writer from './Writer'
import NotFound from '../Errors/404'

export default ({writers, match: {url}}) =>
  <Fragment>
    <ul>
      {writers.map(({id, name}) =>
          <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        )}
    </ul>

    <Route exact path={`${url}`} render={() => <h3>please select a person</h3>}/>
    <Route path={`${url}/:writerId`} render={
      (props) => {
        const writer = writers.find(({id}) => id === props.match.params.writerId)

        if (!writer) {
        {/* return <Redirect to="/404" /> */}
        return <NotFound/>
        }

        return <Writer {...props} {...writer}/>
      }
    } />
  </Fragment>
