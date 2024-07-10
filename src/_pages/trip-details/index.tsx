import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreateActivityModal from './_components/create-activity-modal';
import ImportantLinks from './_components/important-links';
import Guests from './_components/guests';
import Activities from './_components/activities';
import DestinationAndDateHeader from './_components/destination-and-date-header';
import Button from '../../_components/button';

const TripDetailsPage = () => {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    const handleToggleCreateActivityModal = () => {
        setIsCreateActivityModalOpen((state) => !state);
    };
    return (
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
            <DestinationAndDateHeader />

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <Button onClick={handleToggleCreateActivityModal}>
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </Button>
                    </div>

                    <Activities />
                </div>
                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    handleToggleCreateActivityModal={handleToggleCreateActivityModal}
                />
            )}
        </div>
    );
};

export default TripDetailsPage;
