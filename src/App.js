import React, {Suspense} from 'react'
import Loader from 'react-loader-spinner'
import {NetworkErrorBoundary, useResource} from 'rest-hooks'

import CommentList from './CommentList'
import Comment from './resource/Comment'
import Photo from './resource/Photo'

const App = ({postId, albumId}) => {
  const comments = useResource(Comment.listShape(), {postId})
  const photos = useResource(Photo.listShape(), {albumId})
  return (
    <div>
      <CommentList comments={comments}/>
      {photos.map(({id, thumbnailUrl, title}) => <img key={id} src={thumbnailUrl} alt={title}/>)}
    </div>
  )
}

App.defaultProps = {postId: 1, albumId: 3}

export default () => (
  <Suspense fallback={<Loader type="TailSpin" color="#00BFFF" height="100" width="100"/>}>
    <NetworkErrorBoundary>
      <App/>
    </NetworkErrorBoundary>
  </Suspense>
)
