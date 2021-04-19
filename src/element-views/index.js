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
  Input,
  Button,
  Select,
  Option,
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
       Tag,
       Input,
       Button,
       Select,
       Option
   ].forEach((C)=>{Vue.use(C)});
    
}