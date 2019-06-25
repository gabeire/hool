import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {

   const scrollToElement = (element) => {
         scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
         });
         props.onClose(false)
   }
    return (
        <Drawer
          anchor="right"
          open={props.open}
          onClose={()=> props.onClose(false)}
        >
          <List component="nav">
             <ListItem button onClick={()=> scrollToElement('Waqtiga')}>
                Waqtiga xaflada
             </ListItem>

             <ListItem button onClick={()=> scrollToElement('Sharaxaad')}>
                Sharaxaad
             </ListItem>

             <ListItem button onClick={()=> scrollToElement('Warbixin')}>
                Warbixin
             </ListItem>

             <ListItem button onClick={()=> scrollToElement('Qiimaha')}>
                Qiimaha
             </ListItem>

             <ListItem button onClick={()=> scrollToElement('Goobta')}>
                Goobta
             </ListItem>

          </List>


            
        </Drawer>
    )
}

export default SideDrawer





