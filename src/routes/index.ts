import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes]);
}
