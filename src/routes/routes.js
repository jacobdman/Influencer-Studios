import Home from '../Components/Home/Home';
import Gallery from '../Components/Gallery/Gallery';
import Examples from '../Components/Examples/Examples';
import About from '../Components/About/About';
import Specs from '../Components/Specs/Specs';
import Testimonials from '../Components/Testimonials/Testimonials';
import MakeItUp from '../Components/MakeItUp/MakeItUp';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/gallery',
    component: Gallery,
    exact: true,
  },
  {
    path: '/examples',
    component: Examples,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/specs',
    component: Specs,
    exact: true,
  },
  {
    path: '/testimonials',
    component: Testimonials,
    exact: true,
  },
  {
    path: '/makeitup',
    component: MakeItUp,
    exact: true,
  },
];

export default routes;
