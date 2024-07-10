import { X, Tag, Calendar } from 'lucide-react';

interface CreateActivityModalProps {
    handleToggleCreateActivityModal: () => void;
}

const CreateActivityModal = ({ handleToggleCreateActivityModal }: CreateActivityModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 p-6 px-6 py-5 shadow-shape">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                        <button type="button" onClick={handleToggleCreateActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form className="space-y-3">
                    <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
                        <Tag className="size-5 text-zinc-400" />
                        <input
                            type="text"
                            name="title"
                            placeholder="Qual a atividade?"
                            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
                            <Calendar className="size-5 text-zinc-400" />
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className="flex-1 bg-transparent text-lg outline-none [color-scheme:dark] placeholder:text-zinc-400"
                            />
                        </div>
                    </div>
                    <button
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 hover:bg-lime-400"
                        type="submit"
                    >
                        Salvar atividade
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateActivityModal;
