import { Avatar, Box, Button, Divider, Flex, HStack, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { MdEditNotifications } from 'react-icons/md'

function Settings({set_current_page}) {
    const [is_change_password,set_is_change_password]=useState(false);
  return (
    <Box gap='2' m={{
        base:'0',
        md:'8'
    }}>
        <HStack p='1' borderRadius={'md'} bg='#eee' w='20' px='2' my='2' cursor='pointer' onClick={(()=>{set_current_page('dashboard')})}>
            <BsArrowLeft />
            <Text>
                back
            </Text>
        </HStack>
        <Box 
            bg='#fff' 
            borderRadius='xl'
            boxShadow='sm'
            mt='4'
            p='6'
        >
            <Flex gap='4' align='center'>
                <Flex w='100px' position='relative' cursor='pointer' onClick={(()=>{set_image_edit(!image_edit)})}>
                        <Avatar w='100px' h='100px' borderRadius='999' src='' name='dennis sammy' alt='profile photo' boxShadow='lg' objectFit='cover'/>
                        <MdEditNotifications style={{fontSize:'20px',padding:'2px',position:'absolute',bottom:"15px",right:'-5px',backgroundColor:"purple",borderRadius:'20px',color:'#fff'}}/>
                    </Flex>
                <Flex direction='column' gap='1' ml='2'>
                    <Text fontWeight={'bold'}>Dennis Sammy</Text>
                    <Text fontSize={'10px'} color='grey'>dennissammy77@gmail.com</Text>
                </Flex>
            </Flex>
            <Flex direction='column' gap='4'>
                <Flex direction='column'>
                    <Text fontWeight='bold' color='grey'>Username</Text>
                    <Input size='md' type='text' placeholder='dennissammy' variant='filled'/>
                </Flex>
                <Flex gap='2' w='100%'>
                    <Flex flex='1' direction='column'>
                        <Text fontWeight='bold' color='grey'>mobile</Text>
                        <Input size='md' type='tel' placeholder='+2547########' variant='filled'/>
                    </Flex>
                    <Flex flex='1' direction='column'>
                        <Text fontWeight='bold' color='grey'>email</Text>
                        <Input size='md' type='email' placeholder='dennissammy77@gmail.com' variant='filled'/>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify={'start'}>
                <Button mt='2' align='center' bg='purple' color='#fff'>Save changes</Button>
            </Flex>
            <Flex direction='column' gap='2'>
                <Text fontSize='20px' fontWeight='bold' color='grey'>Settings</Text>
                <Divider/>
                <Flex justify={'start'}>
                    <Button color='grey' border='1px solid #eee'>change password</Button>
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default Settings