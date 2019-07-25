import React from 'react'
import Loader from 'react-loader-spinner'
import CommentList from './CommentList'
import CommentsWithData from './CommentsWithData'

const App = () => (
  <CommentsWithData
    loadingNode={
      <Loader type="TailSpin" color="#00BFFF" height="100" width="100" />
    }
    failureNode={<p>It blew up :(</p>}
  >
    {comments => <CommentList comments={comments} />}
  </CommentsWithData>
)

export default App
