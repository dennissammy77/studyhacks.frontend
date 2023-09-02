import { AbsoluteCenter, Avatar, Box, Button, Center, Divider, Flex, HStack, Heading, Highlight, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, SimpleGrid, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiOutlineLink,AiOutlineFilePdf} from 'react-icons/ai';
import {ImFileText2} from 'react-icons/im'
import {BiChevronRight} from 'react-icons/bi'
import {BsInfo} from 'react-icons/bs';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Dashboard({set_current_page}) {
    const [prompt,set_prompt]=useState('');
    const [content,set_content]=useState('');
    const [recent_summaries,set_recent_summaries]=useState('');

    useEffect(()=>{
        fetch_recent_summaries()
    },[]);

    const router = useRouter();

    const payload = {
        prompt
    }
    const Summarize_Content=async()=>{
        await axios.post('',payload).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const fetch_recent_summaries=async()=>{
        await axios.get('').then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <Box bg='#fff' p='4' borderRadius={'10'}>
        <VStack
            px={{
                base: "4",
                md: "16",
            }}
        >
            <Image 
                src='../../../assets/studyhacks-low-resolution-logo-color-on-transparent-background.png'
                objectFit='cover' 
                w='400'
                h='150'
                alt='studyhacks_logo'
            />
            <Text
                my='2'
                px={{
                    base: "4",
                    md: "16",
                }}
                textAlign={'center'}
            >
            At StudyHacks, we are on a mission to make learning complex subjects simpler and more effective. We understand the challenges that students face when trying to grasp intricate topics, and we believe that technology can be the key to unlocking their full potential.
            </Text>
            <HStack textAlign={'center'}>
                <BsInfo size='26px' style={{borderRadius:'50px',padding:'2',backgroundColor:'purple',color:'#fff'}}/>
                <Text bg='purple.100' p='2' borderRadius={'5'}>How to use StudyHacks</Text>
            </HStack>
            <Text textAlign={'center'}>
                Input your text,file, article <br/>then click Summarize to receive personalized study guides.
            </Text>
        </VStack>
        <Tabs 
            variant='soft-rounded' 
            colorScheme='purple'
            mt='6'
            px={{
                base: "4",
                md: "16",
            }} 
            defaultIndex={2}
        >
        <Center>
        <TabList>
                    <Tab>
                        <AiOutlineFilePdf/>
                        document
                    </Tab>
                    <Tab>
                        <AiOutlineLink/>
                        link
                    </Tab>
                    <Tab>
                        <ImFileText2/>text
                    </Tab>
                    </TabList>
                    </Center>
            <TabPanels>
                <TabPanel>
                    <InputGroup
                    >
                        <Input type='file' p='1'/>
                    </InputGroup>
                </TabPanel>
                <TabPanel>
                    <InputGroup size='sm'>
                        <InputLeftAddon children='https://' />
                        <Input placeholder='paste article link' />
                        <InputRightAddon children='.com' />
                    </InputGroup>
                </TabPanel>
                <TabPanel>
                    <InputGroup size='sm'>
                        <Textarea placeholder='paste content to get summary' size='lg' onChange={((e)=>{set_prompt(e.target.value)})}/>
                    </InputGroup>
                </TabPanel>
                <Button bg='purple' color='#fff' mx='4' onClick={Summarize_Content}>Summarize</Button>
            </TabPanels>
        </Tabs>
        <Box
            my='2'
            mx='3'
            px={{
                base: "4",
                md: "16",
            }}  
        >
            <Flex justify={'space-between'}>
                <Text>Recent summaries</Text>
                <HStack alignItems={'center'} cursor={'pointer'} onClick={(()=>{set_current_page('summaries')})}>
                    <Text>see all</Text>
                    <BiChevronRight/>
                </HStack>
            </Flex>
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
            </SimpleGrid>
        </Box>
    </Box>
  )
}