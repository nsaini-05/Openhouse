import * as api from '../apiCall/apiCall'

export const getCommunities = () => async dispatch => {
  try {
    dispatch({ type: 'GET_COMMUNITY_REQUEST' })
    const { data: communities } = await api.getCommunities()
    const { data: homes } = await api.getHomes()

    communities.forEach(function (community) {
      let total = 0
      let numOfHomes = 0

      homes.forEach(function (home) {
        if (home.communityId === community.id) {
          total += home.price
          numOfHomes += 1
        }
      })
      let averagePrice = Number(total / numOfHomes).toFixed(2)
      community.averagePrice = isNaN(averagePrice) ? 0 : averagePrice
    })

    dispatch({
      type: 'GET_COMMUNITY_SUCCESS',
      payload: communities
    })
  } catch (error) {
    dispatch({ type: 'GET_COMMUNITY_FAIL', payload: error.message })
  }
}
