import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from '../Errors/404';
import Writer from './Writer';

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
