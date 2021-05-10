export const model = {
  name: 'Comment'
}

export default {
  first_comment: {
    body: 'Aliquam tristique, ligula eu imperdiet lacinia',
    user_id: '@users.john',
    parent: '@posts.first_post'
  },
  second_comment: {
    body: 'Suspendisse feugiat mi ut libero ultrices',
    user_id: '@users.jane',
    parent: '@videos.first_video'
  }
}
