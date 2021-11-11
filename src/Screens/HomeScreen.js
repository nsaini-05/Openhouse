import React, { useEffect } from 'react'
import { getCommunities } from '../actions/communityActions'
import { useDispatch } from 'react-redux'

const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommunities())
  }, [])

  return <div>HomeScreen</div>
}

export default HomeScreen
