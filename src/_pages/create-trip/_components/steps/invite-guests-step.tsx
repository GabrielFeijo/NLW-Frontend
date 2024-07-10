import { UserRoundPlus, ArrowRight } from 'lucide-react';
import Button from '../../../../_components/button';

interface InviteGuestsModalProps {
    emailsToInvite: string[];
    handleToggleGuestsModal: () => void;
    handleToggleConfirmTripModal: () => void;
}

const InviteGuestsStepModal = ({
    emailsToInvite,
    handleToggleGuestsModal,
    handleToggleConfirmTripModal,
}: InviteGuestsModalProps) => {
    return (
        <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <button
                className="flex flex-1 items-center gap-2 text-left"
                onClick={handleToggleGuestsModal}
            >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                    <span className="flex-1 text-lg text-zinc-100">
                        {emailsToInvite.length} pessoa(s) convidada(s)
                    </span>
                ) : (
                    <span className="flex-1 text-lg text-zinc-400">Quem estará na viagem?</span>
                )}
            </button>
            <div className="h-6 w-px bg-zinc-800"></div>

            <Button onClick={handleToggleConfirmTripModal}>
                Confirmar viagem
                <ArrowRight className="size-5" />
            </Button>
        </div>
    );
};

export default InviteGuestsStepModal;
