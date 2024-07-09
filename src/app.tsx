import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from 'lucide-react';
import { Link } from './_components/link';
import { useState } from 'react';

export function App() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

    function handleToggleGuestsInput() {
        setIsGuestsInputOpen((state) => !state);
    }

    return (
        <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
            <div className="w-full max-w-3xl space-y-10 px-6 text-center">
                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="Logo do Projeto" />
                    <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className="space-y-4">
                    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
                        <div className="flex flex-1 items-center gap-2">
                            <MapPin className="size-5 text-zinc-400" />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="size-5 text-zinc-400" />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400" />
                        </div>
                        <div className="h-6 w-px bg-zinc-800"></div>
                        {isGuestsInputOpen ? (
                            <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700" onClick={handleToggleGuestsInput}>
                                Alterar local/data
                                <Settings2 className="size-5" />
                            </button>
                        ) : (
                            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400" onClick={handleToggleGuestsInput}>
                                Continuar
                                <ArrowRight className="size-5" />
                            </button>
                        )}
                    </div>

                    {isGuestsInputOpen && (
                        <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
                            <div className="flex flex-1 items-center gap-2">
                                <UserRoundPlus className="size-5 text-zinc-400" />
                                <input type="text" placeholder="Quem estará presente?" className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400" />
                            </div>
                            <div className="h-6 w-px bg-zinc-800"></div>
                            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                                Confirmar viagem
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda
                    <br /> com nossos <Link href="#">termos de uso</Link> e <Link href="#">políticas de privacidade</Link>.
                </p>
            </div>
        </div>
    );
}
