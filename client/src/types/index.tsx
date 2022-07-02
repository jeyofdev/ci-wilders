import { ChangeEventHandler, ReactNode } from 'react';

export type LayoutType = {
    children: ReactNode;
};

export type SkillType = {
    id?: number;
    title: string;
    votes: number;
};

export type WilderType = {
    id: number;
    name: string;
    city: string;
    skills: SkillType[];
};

export type GetWildersType = {
    wilders: WilderType[];
};

export type GetWilderType = {
    wilder: WilderType;
};

export type CreateWilderFormType = {
    method: 'post' | 'put';
    wilder: any;
};

export type InputType = {
    label: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export type ButtonType = {
    onClick: () => void;
    children: ReactNode;
    themeColor: string;
    margin: string;
};

export type ModalType = {
    children: ReactNode;
    onClose: () => void;
};

export type DialogType = {
    content: string;
    onCancel: () => void;
    onConfirmation: () => void;
};

export type CreateType = {
    fetchWilders: () => Promise<void>;
};
