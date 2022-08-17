import { Box } from '@mui/material'
import React from 'react'
import ContactLabel from './ContactLabel'
import SearchContact from './SearchContact'

const AllContacts = () => {
  return (
    <Box paddingX={2}>
        <SearchContact/>
        <ContactLabel/>
        <ContactLabel/>
        <ContactLabel/>
        <ContactLabel/>
    </Box>
    )
}

export default AllContacts