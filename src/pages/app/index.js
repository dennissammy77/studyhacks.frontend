import React, { useEffect, useState } from 'react';
import Navigation_Tab from '../../../components/navigation';
import { 
  Alert, 
  AlertDescription, 
  AlertIcon, 
  AlertTitle, 
  Box,
  useToast 
} from '@chakra-ui/react';

//sections
import Dashboard from './dashboard';
import Summary from './summary'
//utils

export default function Index() {
    const [current_page,set_current_page]=useState('dashboard');
  return (
    <Navigation_Tab set_current_page={set_current_page} current_page={current_page} >
        <Body current_page={current_page} set_current_page={set_current_page}/>
    </Navigation_Tab>
  )
}

const Body=(props)=>{
  const {current_page,set_current_page}={...props}
  if (current_page == 'dashboard'){
      return (
        <Dashboard set_current_page={set_current_page}/>
      )
  }else if (current_page == 'summary'){
    return (
      <Summary set_current_page={set_current_page}/>
    )
  }else{
    return(
      <Dashboard set_current_page={set_current_page}/>
    )
  }
        
}