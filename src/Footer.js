import { Container } from '@chakra-ui/react'
import React from 'react'


function Footer({time}) {

  return (
    <Container mt={6} centerContent>Last checked : {time} ago</Container>
  )
}

export default Footer