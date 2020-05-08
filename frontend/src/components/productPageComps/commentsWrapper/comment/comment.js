import React, { Component } from 'react'

function comment(props) {

  return (
    <div>
      <p>{props.comment}</p>
      <p>{props.user_name}</p>
      <p>{props.comment_rate}</p>
    </div>
  )


}


export default comment