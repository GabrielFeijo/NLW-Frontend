import { MapPin, Calendar, Settings2 } from 'lucide-react';
import Button from '../../../_components/button';

const DestinationAndDateHeader = () => {
    return (
        <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="ext-zinc-100">Florianópolis, Brasil</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">16 a 27 de Agosto</span>
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
