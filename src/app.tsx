import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from 'lucide-react';
import { Link } from './_components/link';
import { FormEvent, useState } from 'react';

export function App() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>(['f6Kw6@example.com']);

    function handleToggleGuestsInput() {
        setIsGuestsInputOpen((state) => !state);
    }

    function handleToggleGuestsModal() {
        setIsGuestsModalOpen((state) => !state);
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string;

        if (!email) return;

        if (emailsToInvite.includes(email)) return;

        setEmailsToInvite((state) => [...state, email]);

        event.currentTarget.reset();
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
                            <button className="flex flex-1 items-center gap-2 text-left" onClick={handleToggleGuestsModal}>
                                <UserRoundPlus className="size-5 text-zinc-400" />
                                <span className="flex-1 text-lg text-zinc-400">Quem estará na viagem?</span>
                            </button>
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

            {isGuestsModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60">
                    <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 p-6 px-6 py-5 shadow-shape">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                                <button onClick={handleToggleGuestsModal} type="button">
                                    <X className="size-5 text-zinc-400" />
                                </button>
                            </div>
                            <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {emailsToInvite.map((email, index) => (
                                <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5" key={index}>
                                    <span className="text-zinc-300">{email}</span>
                                    <button type="button">
                                        <X className="size-4 text-zinc-400" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="h-px w-full bg-zinc-800"></div>

                        <form className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5" onSubmit={addNewEmailToInvite}>
                            <div className="flex flex-1 items-center gap-2 px-2">
                                <AtSign className="size-5 text-zinc-400" />
                                <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400" />
                            </div>
                            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400" type="submit">
                                Convidar
                                <Plus className="size-5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
