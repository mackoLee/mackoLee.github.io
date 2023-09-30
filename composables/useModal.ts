import {ModalObj} from "~/components/modal";

export function useModal() {
    const open = (modalObj: ModalObj) => {
        useNuxtApp().$openModal(modalObj);
    }
    const hide = () => {
        useNuxtApp().$hideModal();
    }
    return {
        open,
        hide
    };
}