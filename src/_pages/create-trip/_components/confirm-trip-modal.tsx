import { X, User } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../../_components/button';

interface ConfirmTripModalProps {
    handleToggleConfirmTripModal: () => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

const ConfirmTripModal = ({ handleToggleConfirmTripModal, createTrip }: ConfirmTripModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 p-6 px-6 py-5 shadow-shape">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                        <button onClick={handleToggleConfirmTripModal} type="button">
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Para concluir a criação da viagem para{' '}
                        <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span>{' '}
                        nas datas de{' '}
                        <span className="font-semibold text-zinc-100">
                            16 a 27 de Agosto de 2024
                        </span>{' '}
                        preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className="space-y-3">
                    <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
                        <User className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome completo"
                            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                        />
                    </div>
                    <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
                        <User className="size-5 text-zinc-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu email pessoal"
                            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                        />
                    </div>

                    <Button size="full" type="submit">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ConfirmTripModal;
