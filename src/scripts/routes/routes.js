import ListRestaurants from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurants, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
