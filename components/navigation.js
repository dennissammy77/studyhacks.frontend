import {
    Avatar,
    Box,
    Center,
    Divider,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HStack,
    Icon,
    IconButton,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";

  import {MdSpaceDashboard,MdOutlineMenu,MdOutlineSettings} from 'react-icons/md';
  import {BiStats} from 'react-icons/bi';
  import {BiLogOutCircle} from 'react-icons/bi';
  import {BsFilesAlt} from 'react-icons/bs';
  import { useRouter } from "next/router";


  function Navigation_Tab({children,current_page,set_current_page}){
    const sidebar = useDisclosure();
    return(
        <Box
            as="section"
            bg='#D8DBE2'
            _dark={{
            bg: "gray.700",
            }}
            minH="100vh"
        >
        <SidebarContent
          display={{
            base: "none",
            md: "unset",
          }}
          current_page={current_page}
          set_current_page={set_current_page}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent 
              w="full" 
              borderRight="none"
              current_page={current_page}
              set_current_page={set_current_page}
            />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
            as="header"
            align="center"
            w="full"
            px="4"
            bg="white"
            display={{
                base: "inline-flex",
                md: "none",
              }}
            _dark={{
              bg: "gray.800",
            }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
            gap='2'
            justify={'space-between'}
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: "inline-flex",
                md: "none",
              }}
              onClick={sidebar.onOpen}
              icon={<MdOutlineMenu />}
              size="sm"
            />
            <Avatar
              size={"sm"}
              name='dennis sammy'
              src=''
            />
          </Flex>
          <Box as="main" py='2' px='3' rounded="md">
              {children}
          </Box>
        </Box>
      </Box>
    )
  }
  
  export default Navigation_Tab;
  
  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        m='2'
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{ color: "gray.400" }}
        _hover={{
          bg: "gray.100",
          _dark: { bg: "gray.900" },
          color: "gray.900",
          borderRadius:5
        }}
        role="group"
        fontWeight="regular"
        fontSize={'md'}
        transition=".3s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="5"
            _groupHover={{
              color: "gray.900",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };
  
  const SidebarContent = (props) => {
  const {current_page,set_current_page}={...props};
  const router = useRouter();
  return(
    <Box
      as="nav"
      pos="fixed"
      margin={{ 
        base: 0, 
        md: 2 }}
      borderRadius={'10'}
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#fff"
      _dark={{
        bg: "gray.800",
      }}
      bordercolor="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <HStack
        m='2'
        alignItems={'center'}
        gap='2'
      >
        <Avatar
            name='dennis sammy'
            borderRadius={'5'}
            size='lg'
        />
        <Box
            alignItems={'center'}
            w='100%'
        >
            <Text 
                fontSize={'md'}
                fontWeight={'semibold'}
            >
                Dennis Sammy
            </Text>
            <Text 
                fontSize={'10px'}
                fontWeight={'regular'}
                overflow={'clip'}
                w='full'
            >
                dennissammy77@gmail.com
            </Text>
        </Box>
      </HStack>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        gap='1'
      >
        <NavItem 
            bg={current_page == 'dashboard'? 'purple' : ''}
            color={current_page == 'dashboard'? '#fff' : ''} 
            borderRadius={current_page == 'dashboard'? 'md' : ''} 
            icon={MdSpaceDashboard} 
            onClick={(()=>{set_current_page("dashboard")})}
        >
            Dashboard
        </NavItem>
        <NavItem 
            bg={current_page == 'summaries'? 'purple' : ''}
            color={current_page == 'summaries'? '#fff' : ''} 
            borderRadius={current_page == 'summaries'? 'md' : ''} 
            icon={BsFilesAlt} 
            onClick={(()=>{set_current_page("summaries")})}
        >
            Summaries
        </NavItem>
        <NavItem 
            bg={current_page == 'stats'? 'purple' : ''}
            color={current_page == 'stats'? '#fff' : ''} 
            borderRadius={current_page == 'stats'? 'md' : ''} 
            icon={BiStats   } 
            onClick={(()=>{set_current_page("dashboard")})}
        >
            Study stats
        </NavItem>
        <NavItem 
            bg={current_page == 'settings'? 'purple' : ''}
            color={current_page == 'settings'? '#fff' : ''} 
            borderRadius={current_page == 'settings'? 'md' : ''} 
            icon={MdOutlineSettings} 
            onClick={(()=>{set_current_page("settings")})}
        >
            Settings
        </NavItem>
        <Divider/>
        <HStack
          m='4'
          alignItems={'center'}
          gap='2'
          bg ='gray.400'
          p='2'
          borderRadius={'5'}
          color='#fff'
          onClick={(()=>{router.push('/')})}
          justify={''}
        >
          <BiLogOutCircle/>
          <Text>LogOut</Text>
        </HStack>
      </Flex>
    </Box>
  )};