
import {useState} from 'react';

export default function useToggle() {

    const [isSelected, setValue] = useState(false);

    const handleToggle = () => {
        setValue(!isSelected);
    }

    return [handleToggle, isSelected];
}