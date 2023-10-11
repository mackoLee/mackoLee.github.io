// not required props
declare type ModalObj = {
    component: Function,
    size?: string|undefined,
    preventClose?: boolean|undefined,
}

declare type ModalLayout = "defaultLayout" | "emptyLayout";

export {
    ModalObj,
    ModalLayout
}