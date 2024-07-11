import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react';
import Button from '../../../_components/button';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';
import { useQuery } from '@tanstack/react-query';

interface Participant {
    id: string;
    name: string | null;
    email: string;
    is_confirmed: boolean;
}

const Guests = () => {
    const { tripId } = useParams();

    const fetchParticipants = async () => {
        const response = await api.get(`/trips/${tripId}/participants`);
        const data: Participant[] = response.data.participants;
        return data;
    };

    const { data: participants } = useQuery({
        queryKey: ['get-participants', tripId],
        queryFn: () => fetchParticipants(),
    });

    return (
        <div className="h-px w-full bg-zinc-800">
            <div className="space-y-6">
                <h2 className="text-xl font-semibold">Convidados</h2>
                <div className="space-y-5">
                    {participants?.map((participant, idx) => (
                        <div
                            className="flex items-center justify-between gap-4"
                            key={participant.id}
                        >
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100">
                                    {participant.name || `Convidado ${idx}`}
                                </span>
                                <span className="block truncate text-sm text-zinc-400">
                                    {participant.email}
                                </span>
                            </div>
                            {participant.is_confirmed ? (
                                <CheckCircle2 className="size-5 shrink-0 text-lime-300" />
                            ) : (
                                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
                            )}
                        </div>
                    ))}
                </div>
                <Button variant="secondary" size="full">
                    <UserCog className="size-5" />
                    Gerenciar convidados
                </Button>
            </div>
        </div>
    );
};

export default Guests;
