import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateTripPage } from './_pages/create-trip';
import TripDetailsPage from './_pages/trip-details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateTripPage />,
    },
    {
        path: '/trips/:tripId',
        element: <TripDetailsPage />,
    },
]);

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
