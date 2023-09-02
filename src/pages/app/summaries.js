import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import {BsArrowLeft} from 'react-icons/bs';

export default function Summaries({set_current_page}) {
    const fetch_recent_summaries=async()=>{
        await axios.get('').then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetch_recent_summaries()
    },[])
  return (
    <Box>
        <HStack p='1' borderRadius={'md'} bg='#eee' w='20' px='2' my='2' cursor='pointer' onClick={(()=>{set_current_page('dashboard')})}>
            <BsArrowLeft />
            <Text>
                back
            </Text>
        </HStack>
        <Box bg='#fff' p='4' borderRadius={'10'}>
            <SimpleGrid 
                minChildWidth='200px' 
                spacing='40px'
                my='2'
            >
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
                <Box borderRadius={'5'} onClick={(()=>{set_current_page('summary')})} fontSize={'xs'}>
                    <Skeleton height='200' borderRadius={'5'} />
                    <Text fontWeight={'bold'}>Summary One</Text>
                    <Text>subject</Text>
                    <Text>date</Text>
                </Box>
            </SimpleGrid>
        </Box>        
    </Box>
  )
}