import type {ModalObj} from '~/components/modal/Modal.d.ts'

export const onClick = () => {
    const modalObj: ModalObj = {
        component: () => import('../GoogleApiConnectFormCard.vue'),
        size: 'sm',
        layout: 'emptyLayout'


    }
    useModal().open(modalObj)
}

