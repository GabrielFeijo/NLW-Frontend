import { FormEvent, useState } from 'react';
import { Link } from './_components/link';
import { useNavigate } from 'react-router-dom';
import InviteGuestsModal from './_components/invite-guests-modal';
import ConfirmTripModal from './_components/confirm-trip-modal';
import DestinationAndDateStep from './_components/steps/destination-and-date-step';
import InviteGuestsStepModal from './_components/steps/invite-guests-step';
import { DateRange } from 'react-day-picker';
import { api } from '../../lib/axios';

export interface EventData {
    destination?: string;
    eventStartAndEndDates?: DateRange;
}

export function CreateTripPage() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

    const [eventData, setEventData] = useState<EventData>({
        destination: undefined,
        eventStartAndEndDates: undefined,
    });
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

    function handleToggleGuestsInput() {
        setIsGuestsInputOpen((state) => !state);
    }

    function handleToggleGuestsModal() {
        setIsGuestsModalOpen((state) => !state);
    }

    function handleToggleConfirmTripModal() {
        setIsConfirmTripModalOpen((state) => !state);
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

    function removeEmailFromInvite(email: string) {
        setEmailsToInvite((state) => state.filter((stateEmail) => stateEmail !== email));
    }

    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const ownerName = data.get('owner_name') as string;
        const ownerEmail = data.get('owner_email') as string;
        const { destination, eventStartAndEndDates } = eventData;

        const response = await api.post('/trips', {
            destination,
            starts_at: eventStartAndEndDates?.from,
            ends_at: eventStartAndEndDates?.to,
            owner_name: ownerName,
            owner_email: ownerEmail,
            emails_to_invite: emailsToInvite,
        });

        const { tripId } = response.data;

        navigate(`/trips/${tripId}`);
        event.currentTarget.reset();
    }

    return (
        <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
            <div className="w-full max-w-3xl space-y-10 px-6 text-center">
                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="Logo do Projeto" />
                    <p className="text-lg text-zinc-300">
                        Convide seus amigos e planeje sua próxima viagem!
                    </p>
                </div>

                <div className="space-y-4">
                    <DestinationAndDateStep
                        isGuestsInputOpen={isGuestsInputOpen}
                        handleToggleGuestsInput={handleToggleGuestsInput}
                        eventData={eventData}
                        setEventData={setEventData}
                    />

                    {isGuestsInputOpen && (
                        <InviteGuestsStepModal
                            emailsToInvite={emailsToInvite}
                            handleToggleGuestsModal={handleToggleGuestsModal}
                            handleToggleConfirmTripModal={handleToggleConfirmTripModal}
                        />
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda
                    <br /> com nossos <Link href="#">termos de uso</Link> e{' '}
                    <Link href="#">políticas de privacidade</Link>.
                </p>
            </div>

            {isGuestsModalOpen && (
                <InviteGuestsModal
                    emailsToInvite={emailsToInvite}
                    handleToggleGuestsModal={handleToggleGuestsModal}
                    addNewEmailToInvite={addNewEmailToInvite}
                    removeEmailFromInvite={removeEmailFromInvite}
                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    createTrip={createTrip}
                    handleToggleConfirmTripModal={handleToggleConfirmTripModal}
                />
            )}
        </div>
    );
}
