export const model = {
  name: 'Submission'
}

export default {
  first_pull_request_submission: {
    user_id: '@users.john',
    submission: '@pull_requests.first_pull_request'
  },
  second_pull_request_submission: {
    user_id: '@users.jane',
    submission: '@pull_requests.second_pull_request'
  },
  first_issue_submission: {
    user_ud: '@users.john',
    submission: '@issues.first_issue'
  },
  second_issue_submission: {
    user_id: '@users.jane',
    submission: '@issues.second_issue'
  }
}
