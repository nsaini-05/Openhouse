import * as api from '../apiCall/apiCall'

function compare (a, b) {
  // Use toUpperCase() to ignore character casing
  const bandA = a.name.toUpperCase()

  const bandB = b.name.toUpperCase()

  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}

export const getCommunities = () => async dispatch => {
  try {
    dispatch({ type: 'GET_COMMUNITY_REQUEST' })
    let { data: communities } = await api.getCommunities()
    communities = communities.sort(compare)
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
