import AboutComp from './Components/About.vue';
import ContactComp from './Components/Contact.vue';
import ContactNotesComp from './Components/Contact_notes.vue';
import MenuComp from './Components/Menu.vue';

export const routes = [
  { path: '',component: AboutComp, name: 'about' },
  { path: '/menu', component: MenuComp, children:[
    {path: ':id',component: MenuComp, name: 'menuProfile'},
    ]
  },
  { path: '/contact',component: ContactComp, children:[
    {path: 'show', component: ContactNotesComp, name: 'contactProfile'}
    ]
  },
  { path: '*', component: AboutComp}
]

