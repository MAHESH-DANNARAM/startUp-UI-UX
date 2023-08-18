import React from 'react';
import Toggle from '@/APIs/components/Toggle';
import Select from '@/APIs/components/Select';

interface Props {
  toggle: any; // Replace 'any' with the actual type for the Toggle props
  language: any; // Replace 'any' with the actual type for the Select props
}

const YourComponent: React.FC<Props> = ({ toggle, language }) => {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2">
      <Toggle {...toggle} />
      <Select {...language} />
    </div>
  );
};

export default YourComponent;

