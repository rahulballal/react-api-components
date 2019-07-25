import React from 'react'

const CommentList = ({ comments }) => {
  return (
    [<h2>Comments</h2>,
    <ul>
      {comments.map(({ id, email }) => (
        <li key={id}>
          <p>{email}</p>
        </li>
      ))}
    </ul>]
  )
}

export default CommentList
