import { AbsoluteCenter, Alert, AlertIcon, Avatar, Box, Button, Center, CircularProgress, Divider, Flex, HStack, Heading, Highlight, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Progress, SimpleGrid, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiOutlineLink,AiOutlineFilePdf} from 'react-icons/ai';
import {ImFileText2} from 'react-icons/im'
import {BiChevronRight} from 'react-icons/bi'
import {BsInfo} from 'react-icons/bs';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Dashboard({set_current_page}) {
    const [prompt,set_prompt]=useState('');
    const [summary_content,set_summary_content]=useState('');
    const [recent_summaries,set_recent_summaries]=useState('');
    const [is_summary_completed,set_is_summary_completed]=useState(false);
    const [is_fetching,set_is_fetching]=useState(false);
    const [view_prompt,set_view_prompt]=useState(false);

    // useEffect(()=>{
    //     fetch_recent_summaries()
    // },[]);

    const router = useRouter();

    const payload = {
        prompt
    }
    // const Summarize_Content=async()=>{
    //     await axios.post(
    //         'https://api-inference.huggingface.co/models/pszemraj/led-large-book-summary',
    //         {
    //             headers: { Authorization: "Bearer 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" },
    //         },
    //         JSON.stringify(prompt)
    //     ).then((response)=>{
    //         console.log(response)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    const Summarize_Content=async()=>{
        console.log(prompt)
        set_is_fetching(true);
        const response = await fetch(
            "https://api-inference.huggingface.co/models/pszemraj/led-large-book-summary",
            {
              headers: { Authorization: "Bearer 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" },
              method: "POST",
              body: JSON.stringify(prompt),
            }
          );
        const result = await response.json();
        if (result?.[0]?.summary_text.length > 0){
            set_is_fetching(false);
            set_is_summary_completed(true);
            set_summary_content(result?.[0]?.summary_text);
        }
    }
    // const fetch_recent_summaries=async()=>{
    //     await axios.get('').then((response)=>{
    //         console.log(response)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    const clear_forms=()=>{
        set_is_fetching(false);
        set_is_summary_completed(false);
        set_prompt('');
        set_summary_content('');
        set_view_prompt(false)
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
            {is_fetching || summary_content?.length > 0?
                <Text my='2'>Happy studying!</Text>
                :
                <>
                <Text
                    my='0'
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
                </>
            }
        </VStack>
        {is_summary_completed?
            <Alert status='success' justifyContent={'space-between'}>
                <HStack>
                    <AlertIcon />
                    <Text>
                        Your prompt has been summarized
                    </Text>
                </HStack>
                <HStack bg='green.300' p='1' borderRadius={'md'} cursor={'pointer'}>
                    <Text fontWeight={'semibold'} color='#fff' onClick={(()=>{set_view_prompt(!view_prompt)})}>{!view_prompt? 'see prompt': 'close prompt'}</Text>
                </HStack>
            </Alert>
            :
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
                    {is_fetching && prompt !== ''?
                    <Button bg='purple' color='#fff' mx='4' isLoading loadingText='Summarizing'>
                    </Button>
                    :
                    <Button bg='purple' color='#fff' mx='4' onClick={Summarize_Content}>
                        {is_fetching? 'Summarizing' : 'Summarize'}
                        {is_fetching && !is_summary_completed?
                            <CircularProgress isIndeterminate color='purple.300' size='20px' mx='2'/>
                            :
                            null
                        }
                    </Button>
                    }
                </TabPanels>
            </Tabs>
        }
        {view_prompt?
            <Box px='16'>
                <Text fontSize={'sm'} fontWeight={'semibold'} py='2'>prompt:</Text>
                <Divider/>
                <Text fontSize={'xs'} color={'gray.400'}>
                    {prompt}
                </Text>
            </Box>
            :
            null
        }
        <Box
            my='2'
            mx='3'
            px={{
                base: "4",
                md: "12",
            }}  
        >
            {is_fetching?
                <Flex h='md' justify='center' alignItems={'center'} w='full' bg='#eee' borderRadius={'md'}>
                    <CircularProgress isIndeterminate color='purple.300' />
                </Flex>
                :
                <>
                {is_summary_completed?
                    <Box>
                        <Text fontSize={'sm'} fontWeight={'semibold'} py='2'>Summarized prompt</Text>
                        <Divider/>
                        <Text py='2' fontSize={'sm'}>{summary_content}</Text>
                        <Flex>
                            <Tag colorScheme='purple' onClick={clear_forms} cursor='pointer'>New prompt</Tag>
                        </Flex>
                    </Box>
                    :
                    null
                }
                </>
            }
        </Box>
    </Box>
  )
}

/**
 * 
 * 
 * (
                        <>
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
                        </>
                    )
 */