import { X, Tag, Calendar } from 'lucide-react';
import Button from '../../../_components/button';
import Input from '../../../_components/input';

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
                        <button onClick={handleToggleCreateActivityModal}>
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
                        <Input type="text" name="title" placeholder="Qual a atividade?" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
                            <Calendar className="size-5 text-zinc-400" />
                            <Input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                            />
                        </div>
                    </div>

                    <Button variant="primary" size="full" type="submit">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateActivityModal;
