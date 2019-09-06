import Home from '../Components/Home/Home';
import Gallery from '../Components/Gallery/Gallery';
import Contact from '../Components/Contact/Contact';
import AboutYou from '../Components/About/You';
import Team from '../Components/About/Team';

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
    path: '/about/you',
    component: AboutYou,
    exact: true,
  },
  {
    path: '/about/team',
    component: Team,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
];

export default routes;
