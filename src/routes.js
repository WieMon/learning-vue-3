import AboutComp from './Components/About.vue';
import ContactComp from './Components/Contact.vue';
import ContactNotesComp from './Components/Contact_notes.vue';

export const routes = [
  { path: '',component: AboutComp },
  { path: '/contact',component: ContactComp, children:[
    //{path: ':id', component: ContactComp},
    {path: 'show', component: ContactNotesComp}
  ] }
]

