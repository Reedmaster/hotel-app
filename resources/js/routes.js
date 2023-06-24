import Accommodation from '@/components/Pages/Accommodation.vue';
import Booking from '@/components/Pages/Booking.vue';
import Home from '@/components/Pages/Home.vue';
import SeeAndDo from '@/components/Pages/SeeAndDo.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/accommodation', name: 'Accommodation', component: Accommodation },
  { path: '/see-and-do', name: 'SeeAndDo', component: SeeAndDo },
  { path: '/booking', name: 'Booking', component: Booking },
];
