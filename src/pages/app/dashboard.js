import { AbsoluteCenter, Avatar, Box, Center, Divider, HStack, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, SimpleGrid, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineLink,AiOutlineFilePdf} from 'react-icons/ai';
import {ImFileText2} from 'react-icons/im'


export default function Dashboard({set_current_page}) {
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
                my='4'
                px={{
                    base: "4",
                    md: "16",
                }}
                textAlign={'center'}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. 
            </Text>
        </VStack>
        <Tabs 
            variant='soft-rounded' 
            colorScheme='purple'
            my='2'
            px={{
                base: "4",
                md: "16",
            }} 
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
                        <Textarea placeholder='paste content to get summary' size='lg'/>
                    </InputGroup>
                </TabPanel>
            </TabPanels>
        </Tabs>
        <Box
            my='2'
            px={{
                base: "4",
                md: "16",
            }}  
        >
            <Text>Recents</Text>
            <SimpleGrid 
                minChildWidth='120px' 
                spacing='40px'
                my='2'
            >
                <Skeleton height='200' borderRadius={'5'} />
                <Skeleton height='200' borderRadius={'5'} />
                <Skeleton height='200' borderRadius={'5'} />
                <Box bg='#D9D9D9' borderRadius={'5'} height='200' onClick={(()=>{set_current_page('summary')})}></Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}