'use client';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import React, { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface ISubmitButtonsProps {
    className?: string;
    text?: string;
}

/**
 * @component SubmitButtons
 * @todo Add styling, enhance props, and implement business logic as needed.
 */

export const SubmitButtons: FC<ISubmitButtonsProps> = ({ className, text }) => {
    const { pending } = useFormStatus();
    return (
        <div>
            <Button type="submit" size="lg" disabled={pending} className={`capitalize ${className}`}>
                {pending ? (
                    <>
                        <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                        Please wait...
                    </>
                ) : (
                    text
                )}
            </Button>
        </div>
    );
};

export default SubmitButtons;
