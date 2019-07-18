import React from 'react'
import Form from './forms/Form'

import './../App.css'

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

const Add = () => (
  <div>
    <Form handleSubmit={handleSubmit} initialValues={initialValues}/>
  </div>
)

export default Add
