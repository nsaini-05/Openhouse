import React, { useEffect } from 'react'
import { getCommunities } from '../actions/communityActions'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'

const HomeScreen = () => {
  const { communities } = useSelector(state => state.communityList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommunities())
  }, [])

  return (
    <div className='container'>
      {communities &&
        communities.map(community => (
          <>
            <Card community={community} />
          </>
        ))}
    </div>
  )
}

export default HomeScreen
