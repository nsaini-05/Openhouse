import * as api from '../apiCall/apiCall'

export const getCommunities = () => async dispatch => {
  try {
    dispatch({ type: 'GET_COMMUNITY_REQUEST' })
    const { data: communities } = await api.getCommunities()
    const { data: homes } = await api.getHomes()

    console.log(homes)

    communities.forEach(function (community) {
      let total = 0
      let numOfHomes = 0

      homes.forEach(function (home) {
        if (home.communityId === community.id) {
          total += home.price
          numOfHomes += 1
        }
      })

      // community.averagePrice = Number(total / numOfHomes).toFixed(2)

      console.log(`Community ID : ${community.id} total : ${total}`)

      // console.log(community)
    })

    dispatch({
      type: 'GET_COMMUNITY_SUCCESS',
      payload: communities
    })
  } catch (error) {
    dispatch({ type: 'GET_COMMUNITY_FAIL', payload: error.message })
  }
}
