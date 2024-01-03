import {useRoutes} from 'react-router';
import {listRoute} from './listRoutes.tsx';

const Route = () => useRoutes([...listRoute]);

export default Route;
