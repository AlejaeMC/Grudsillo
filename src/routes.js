export const routes =[
    {path: '/', name: 'login', component: () => import('./Views/Login')},
    {path: '/home', component:()=>import('./Views/UserHome')},
    {path: '*',redirect:'/'}
];