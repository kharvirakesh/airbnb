import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';
import React, { FC, useEffect } from 'react';
import { useFormState } from 'react-dom';

interface IFormContainerProps {
    action: actionFunction;
    children: React.ReactNode;
}

const initialState = {
    message: '',
};

/**
 * @component FormContainer
 * @todo Add styling, enhance props, and implement business logic as needed.
 */

export const FormContainer: FC<IFormContainerProps> = ({ action, children }) => {
    const [state, formAction] = useFormState(action, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state?.message) {
            toast({ description: state?.message });
        }
    }, [state]);

    return (
        <form action={formAction}>{children}</form>
    );
};


