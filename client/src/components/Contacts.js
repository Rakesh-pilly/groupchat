import { Box } from '@mui/material'
import React from 'react'
import AllContacts from './AllContacts'
import ChatNavbar from './ChatNavbar'

const Contacts = () => {
  return (
   <Box>
    <ChatNavbar/>
    <AllContacts/>
   </Box>
  )
}

export default Contacts