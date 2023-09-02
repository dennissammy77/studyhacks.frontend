import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';

export default function Summary({set_current_page}) {
  return (
    <Box>
        <HStack p='1' borderRadius={'md'} bg='#eee' w='20' px='2' my='2' cursor='pointer' onClick={(()=>{set_current_page('dashboard')})}>
            <BsArrowLeft />
            <Text>
                back
            </Text>
        </HStack>
        <Box bg='#fff' p='4' borderRadius={'10'}>
            <HStack alignItems={'center'}>
                <Image
                    boxSize={100}
                    bg='#eee'
                    borderRadius={'5'}
                    src=''
                    alt=''
                />
                <Box alignItems={'center'}>
                    <Text>Name of file</Text>
                    <Text fontSize={'sm'}>2/10</Text>
                    <Text fontSize={'sm'}>Date submitted</Text>
                </Box>
            </HStack>
        </Box>
        <Box bg='#fff' p='4' borderRadius={'10'} my='2'>
            <Text color='gray.300'>
                Summary
            </Text>
        </Box>
        
    </Box>
  )
}