import { PtTask } from '../models/domain';

export function datesForTask(t: PtTask) {
    t.dateCreated = new Date(t.dateCreated);
    t.dateDeleted = t.dateDeleted ? new Date(t.dateDeleted) : undefined;
    t.dateEnd = t.dateEnd ? new Date(t.dateEnd) : undefined;
    t.dateModified = new Date(t.dateModified);
    t.dateStart = t.dateStart ? new Date(t.dateStart) : undefined;
}

export function formatDateEnUs(date: Date) {
    return Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(date);
}
