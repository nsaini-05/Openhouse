export const getCommunitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_COMMUNITY_REQUEST':
      return { loading: true }
    case 'GET_COMMUNITY_SUCCESS':
      return {
        loading: false,
        communities: action.payload
      }
    case 'GET_COMMUNITY_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
