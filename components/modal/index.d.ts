// not required props
declare type ModalObj = {
    component: Function,
    size?: string|undefined,
    preventClose?: boolean|undefined,
    layout?: string|undefined
}

declare const ModalLayout: string[] = ["defaultLayout", "emptyLayout"]

export {
    ModalObj,
    ModalLayout
}