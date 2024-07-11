import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react';
import Button from '../../../../_components/button';
import Input from '../../../../_components/input';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';
import { EventData } from '../..';

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean;
    handleToggleGuestsInput: () => void;
    eventData: EventData;
    setEventData: React.Dispatch<React.SetStateAction<EventData>>;
}

const DestinationAndDateStep = ({
    isGuestsInputOpen,
    handleToggleGuestsInput,
    eventData,
    setEventData,
}: DestinationAndDateStepProps) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    function handleToggleDatePicker() {
        setIsDatePickerOpen((state) => !state);
    }

    const displayedDate =
        eventData.eventStartAndEndDates &&
        eventData.eventStartAndEndDates.from &&
        eventData.eventStartAndEndDates.to
            ? format(eventData.eventStartAndEndDates.from, "d' de 'LLL").concat(
                  ' até '.concat(format(eventData.eventStartAndEndDates.to, "d' de 'LLL")),
              )
            : null;

    return (
        <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <Input
                    disabled={isGuestsInputOpen}
                    type="text"
                    placeholder="Para onde você vai?"
                    onChange={(e) => setEventData({ ...eventData, destination: e.target.value })}
                />
            </div>
            <button
                className="flex items-center gap-2 text-left text-zinc-400 outline-none"
                disabled={isGuestsInputOpen}
                onClick={handleToggleDatePicker}
            >
                <Calendar className="size-5" />

                <span className="flex-1 bg-transparent text-lg">{displayedDate || 'Quando?'}</span>
            </button>

            <div className="h-6 w-px bg-zinc-800"></div>
            {isGuestsInputOpen ? (
                <Button onClick={handleToggleGuestsInput} variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            ) : (
                <Button onClick={handleToggleGuestsInput}>
                    Continuar
                    <ArrowRight className="size-5" />
                </Button>
            )}

            {isDatePickerOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60">
                    <div className="space-y-5 rounded-xl bg-zinc-900 p-6 px-6 py-5 shadow-shape">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Selecione a data</h2>
                                <button onClick={handleToggleDatePicker} type="button">
                                    <X className="size-5 text-zinc-400" />
                                </button>
                            </div>
                        </div>

                        <DayPicker
                            mode="range"
                            selected={eventData.eventStartAndEndDates}
                            onSelect={(e) =>
                                setEventData({ ...eventData, eventStartAndEndDates: e })
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DestinationAndDateStep;
