import Accommodation from '@/components/Accommodation.vue';
import Booking from '@/components/Booking.vue';
import Home from '@/components/Home.vue';
import SeeAndDo from '@/components/SeeAndDo.vue';

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
