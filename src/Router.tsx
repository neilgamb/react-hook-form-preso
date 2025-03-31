import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HookFormDemo } from './pages/HookFormDemo.page';
import { NoHookFormDemo } from './pages/NoHookFormDemo.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HookFormDemo />,
  },
  {
    path: '/no-hook-form',
    element: <NoHookFormDemo />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
