import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import NotFound from '../../Errors/404'
import Text from './Text'

export default ({ match: { url }, name, born, deceased, description, image, texts }) =>
  <Fragment>
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>
        {born} &mdash; {deceased}
      </h3>
      <p>
        {description}
      </p>

      <ul>
        {texts.map(({ id, title, published }) =>
          <li key={id}>
            <Link to={`${url}/texts/${id}`}>
              {title} ({published})
            </Link>
          </li>
        )}
      </ul>

      <Route path={`${url}/texts/:textId`} render={
        props => {
          const text = texts.find(({ id }) => id === props.match.params.textId)
          if (!text) {
            return <NotFound/>
          }
          return <Text {...text}/>
        }
      }/>
    </div>
  </Fragment>