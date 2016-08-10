export interface FormField {
    errors?: string[];
    isInValidation?: boolean;
    value?: string;
}

interface Form {
    [name: string]: FormField;
}

interface View {
    form?: Form;
}

export interface StoreStructure {
    app: {
        counter?: number;
        views: {
            [name: string]: View;
        }
    };
    router: {
        location?: {
            query?: {
                [name: string]: string
            }
        }
    };
}

export interface EventTargetExt extends EventTarget {
    value: string;
}

export interface EventExt extends Event {
    target: EventTargetExt;
}

export interface SnapshotProps {
    onClick: Function,
    index: number,
    type?: string,
    selected: boolean
}