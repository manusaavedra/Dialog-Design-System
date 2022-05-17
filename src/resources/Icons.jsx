
import ErrorIcon from './error-icon.svg';
import SuccessIcon from './success-icon.svg';
import WarningIcon from './warning-icon.svg';
import CloseIcon from './icons/24px/close.svg';

const icons = {
    ErrorIcon: () => {
        return <img src={ErrorIcon} alt="error" />
    },
    SuccessIcon: () => {
        return <img src={SuccessIcon} alt="success" />
    },
    WarningIcon: () => {
        return <img src={WarningIcon} alt="warning" />
    },
    CloseIcon: () => {
        return <img src={CloseIcon} alt="close" />
    }
};

export default icons;
