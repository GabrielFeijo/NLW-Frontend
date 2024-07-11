import { Activity, CircleCheck, CircleDashed } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';
import { format, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useQuery } from '@tanstack/react-query';

export interface Activity {
    date: string;
    activities: { id: string; title: string; occurs_at: string }[];
}

const Activities = () => {
    const { tripId } = useParams();

    const fetchActivities = async () => {
        const response = await api.get(`/trips/${tripId}/activities`);
        const data: Activity[] = response.data.activities;
        return data;
    };

    const { data: activities } = useQuery({
        queryKey: ['get-activities', tripId],
        queryFn: () => fetchActivities(),
    });

    return (
        <div className="space-y-8">
            {activities?.map((category) => (
                <div className="space-y-2.5" key={category.date}>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-semibold text-zinc-300">
                            Dia {format(category.date, 'd')}
                        </span>
                        <span className="text-xs text-zinc-500">
                            {format(category.date, 'EEE', { locale: ptBR })}
                        </span>
                    </div>
                    {category.activities.length === 0 ? (
                        <p className="text-sm text-zinc-500">
                            Nenhuma atividade cadastrada nessa data.
                        </p>
                    ) : (
                        <div className="space-y-2.5">
                            {category.activities.map((activity) => (
                                <div
                                    className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape"
                                    key={activity.id}
                                >
                                    {isAfter(activity.occurs_at, new Date()) ? (
                                        <CircleDashed className="size-5 text-zinc-400" />
                                    ) : (
                                        <CircleCheck className="size-5 text-lime-300" />
                                    )}
                                    <span className="text-zinc-100">{activity.title}</span>
                                    <span className="ml-auto text-sm text-zinc-400">
                                        {format(activity.occurs_at, 'HH:mm')}h
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Activities;
