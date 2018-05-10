import React, {Fragment} from 'react'


export default ({ description, title, published}) =>
  <Fragment>
    <h4>
      {title} {published ? `${published}` : ''}
    </h4>
    <p>
      {description ? description : <i>No Description</i>}
    </p>
  </Fragment>