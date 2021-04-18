import Vue from 'vue';
import {  Container,
  Header,
  Aside,
  Main,
  Footer,
  Icon,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Tag,
  Col,} from 'element-ui';

export default ()=>{
   [
       Container,
       Header,
       Aside,
       Main,
       Footer,
       Icon,
       Row,
       Col,
       Menu,
       MenuItem,
       MenuItemGroup,
       Submenu,
       Tag
   ].forEach((C)=>{Vue.use(C)});
    
}