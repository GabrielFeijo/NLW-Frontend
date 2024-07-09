import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react';

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean;
    handleToggleGuestsInput: () => void;
}

const DestinationAndDateStep = ({
    isGuestsInputOpen,
    handleToggleGuestsInput,
}: DestinationAndDateStepProps) => {
    return (
        <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    disabled={isGuestsInputOpen}
                    type="text"
                    placeholder="Para onde você vai?"
                    className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                />
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                    disabled={isGuestsInputOpen}
                    type="text"
                    placeholder="Quando?"
                    className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                />
            </div>
            <div className="h-6 w-px bg-zinc-800"></div>
            {isGuestsInputOpen ? (
                <button
                    className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
                    onClick={handleToggleGuestsInput}
                >
                    Alterar local/data
                    <Settings2 className="size-5" />
                </button>
            ) : (
                <button
                    className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
                    onClick={handleToggleGuestsInput}
                >
                    Continuar
                    <ArrowRight className="size-5" />
                </button>
            )}
        </div>
    );
};

export default DestinationAndDateStep;
