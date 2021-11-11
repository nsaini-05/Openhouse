import axios from 'axios'

const communityUrL =
  'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities'

const homesUrl =
  'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'

export const getCommunities = () => axios.get(communityUrL)
export const getHomes = () => axios.get(homesUrl)
