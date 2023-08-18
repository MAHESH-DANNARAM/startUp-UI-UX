

import { FunctionComponent, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, ...props }) => {
    return (
        <div className="inline-block relative w-64 mb-2">
            <label className="block font-bold">
                <input className="mr-2 leading-tight" type="checkbox" {...props} />
                <span className="text-sm">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;

