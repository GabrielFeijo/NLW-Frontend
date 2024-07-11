import { MapPin, Calendar, Settings2 } from 'lucide-react';
import Button from '../../../_components/button';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';

interface Trip {
    id: string;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed: boolean;
}

const DestinationAndDateHeader = () => {
    const { tripId } = useParams();

    const fetchTripDetails = async () => {
        const response = await api.get(`/trips/${tripId}`);
        const data: Trip = response.data.trip;
        return data;
    };

    const { data: trip } = useQuery({
        queryKey: ['get-trip-details', tripId],
        queryFn: () => fetchTripDetails(),
    });

    const displayedDate = trip
        ? format(trip.starts_at, "d' de 'LLL").concat(
              ' até '.concat(format(trip.ends_at, "d' de 'LLL")),
          )
        : null;

    return (
        <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="ext-zinc-100">{trip?.destination}</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">{displayedDate}</span>
                </div>
                <div className="h-6 w-px bg-zinc-800"></div>
                <Button variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            </div>
        </div>
    );
};

export default DestinationAndDateHeader;
