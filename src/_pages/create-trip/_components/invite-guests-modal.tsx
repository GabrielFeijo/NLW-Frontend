import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../../_components/button';
import Input from '../../../_components/input';

interface InviteGuestsModalProps {
    emailsToInvite: string[];
    handleToggleGuestsModal: () => void;
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
    removeEmailFromInvite: (email: string) => void;
}

const InviteGuestsModal = ({
    emailsToInvite,
    addNewEmailToInvite,
    removeEmailFromInvite,
    handleToggleGuestsModal,
}: InviteGuestsModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 p-6 px-6 py-5 shadow-shape">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                        <button onClick={handleToggleGuestsModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Os convidados irão receber e-mails para confirmar a participação na viagem.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {emailsToInvite.map((email, index) => (
                        <div
                            className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
                            key={index}
                        >
                            <span className="text-zinc-300">{email}</span>
                            <button onClick={() => removeEmailFromInvite(email)}>
                                <X className="size-4 text-zinc-400" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="h-px w-full bg-zinc-800"></div>

                <form
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
                    onSubmit={addNewEmailToInvite}
                >
                    <div className="flex flex-1 items-center gap-2 px-2">
                        <AtSign className="size-5 text-zinc-400" />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Digite o e-mail do convidado"
                        />
                    </div>

                    <Button type="submit">
                        Convidar
                        <Plus className="size-5" />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default InviteGuestsModal;
