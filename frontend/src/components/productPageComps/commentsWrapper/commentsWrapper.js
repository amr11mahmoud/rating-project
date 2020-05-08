import React, { Component } from 'react'
import classes from './commentsWrapper.module.scss'
import Comment from './comment/comment'
function commentsWrapper(props) {
  console.log(props.comments)
  let comments = null
  if (props.comments) {
    comments = props.comments.map(comment => {
      return <Comment comment={comment.comment} user_name={comment.user_name} comment_rate={comment.comment_rate} />
    })
  }
  return (
    <div className={classes.commentsWrapper}>
      <p>Reviews of <b>Nokia 6.1 Plus Dual Sim - 64 GB, 4 GB Ram, 4G LTE, Black, N61Pds64 GB4</b> :</p>
      {comments}
    </div>
  )
}


export default (commentsWrapper)