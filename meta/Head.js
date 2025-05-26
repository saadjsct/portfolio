import React from 'react'
import {Helmet} from "react-helmet";

const Head = (props) => {
  return (
    <Helmet defer={false}>
      <title> {props.title} | Ahmed Saad </title>
    </Helmet>
  )
}

export default Head