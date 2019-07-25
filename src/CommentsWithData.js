import React from 'react'
import { Get } from 'react-axios'

const CommentsWithData = ({ loadingNode, failureNode, children }) => (
  <Get
    url="http://jsonplaceholder.typicode.com/comments"
    params={{ postId: 1 }}
  >
    {(error, response, isLoading) => {
      if (isLoading) {
        return loadingNode
      }

      if (error) {
        return failureNode
      }

      if (response) {
        return children(response.data)
      }

      return failureNode
    }}
  </Get>
)

export default CommentsWithData
