import React from 'react'

import Form from './Form'

const Child= (props) => {

    
    
    return (
    <div>
        <Form  onFromData={props.onFromData} />

        <h1>Child</h1>
    </div>
  )
}

export default Child