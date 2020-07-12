export const model = {
  name: 'Comment'
}

export default {
  first_comment: {
    body: 'Aliquam tristique, ligula eu imperdiet lacinia, nibh neque cursus justo, non congue magna libero a enim.',
    user_id: '@users.john',
    parent: '@posts.first_post'
  },
  second_comment: {
    body: 'Suspendisse feugiat mi ut libero ultrices, vel dapibus ex pellentesque.',
    user_id: '@users.jane',
    parent: '@videos.first_video'
  }
}
