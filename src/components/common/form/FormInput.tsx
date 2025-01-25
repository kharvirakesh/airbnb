import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { FC } from 'react';

interface IFormInputProps {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    isRequired?: boolean;
}

/**
 * @component FormInput
 * @todo Add styling, enhance props, and implement business logic as needed.
 */

export const FormInput: FC<IFormInputProps> = ({ name, type, label, defaultValue, placeholder, isRequired }) => {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className='capitalize'>
                {label ?? ''}</Label>
            <Input type={type} id={name} name={name} defaultValue={defaultValue} placeholder={placeholder} required={isRequired} />
        </div>
    );
};
