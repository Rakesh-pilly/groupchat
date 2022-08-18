import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ContactLabel from './ContactLabel'
import SearchContact from './SearchContact'

const AllContacts = () => {

  const {users} = useSelector(state=> state.onlineuser);
  const {uuid} = useSelector(state=> state.auth);
  

  const onlineUsers = users.map((i,index)=> {

    

    let user = i[1];

    if(i[0] === uuid){
      return ;
    }
    return <ContactLabel key = {index} photoUrl = {user.profile_picture} username = {user.username}/>
  })

  return (
    <Box paddingX={2}>
        <SearchContact/>


        {onlineUsers}
        
    </Box>
    )
}

export default AllContacts