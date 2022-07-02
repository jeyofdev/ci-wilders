import { toast, ToastContent } from 'react-toastify';

export const notifySuccess = (message: string) => {
    return toast.success(message, { theme: 'colored' });
};

export const notifyError = (error: ToastContent | string) => {
    toast.error(error, { theme: 'colored' });
};
