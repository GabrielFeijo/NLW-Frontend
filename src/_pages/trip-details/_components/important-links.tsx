import { Link2, Plus } from 'lucide-react';
import Button from '../../../_components/button';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';

interface Link {
    id: string;
    title: string;
    url: string;
}

const ImportantLinks = () => {
    const { tripId } = useParams();

    const fetchLinks = async () => {
        const response = await api.get(`/trips/${tripId}/links`);
        const data: Link[] = response.data.links;
        return data;
    };

    const { data: links } = useQuery({
        queryKey: ['get-links', tripId],
        queryFn: () => fetchLinks(),
    });

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
                {links?.map((link) => (
                    <div className="flex items-center justify-between gap-4" key={link.id}>
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">{link.title}</span>
                            <a
                                href={link.url}
                                className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                            >
                                {link.url}
                            </a>
                        </div>
                        <Link2 className="size-5 shrink-0 text-zinc-400" />
                    </div>
                ))}
            </div>

            <Button variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    );
};

export default ImportantLinks;
