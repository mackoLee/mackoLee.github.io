import direction from "@/constants/direction";
import {computed, ComputedRef, onMounted, onUnmounted, Ref, ref} from 'vue';

const pressedArrowKeys: Ref<number> = ref(0);
const isUp: ComputedRef = computed(() => pressedArrowKeys.value & direction.UP);
const isDown: ComputedRef = computed(() => pressedArrowKeys.value & direction.DOWN);
const isLeft: ComputedRef = computed(() => pressedArrowKeys.value & direction.LEFT);
const isRight: ComputedRef = computed(() => pressedArrowKeys.value & direction.RIGHT);

const addPressedKeyListener = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowLeft':
            pressedArrowKeys.value |= direction.LEFT;
            break;
        case 'ArrowRight':
            pressedArrowKeys.value |= direction.RIGHT;
            break;
        case 'ArrowUp':
            pressedArrowKeys.value |= direction.UP;
            break;
        case 'ArrowDown':
            pressedArrowKeys.value |= direction.DOWN;
            break;
    }
}
const removeReleasedKeyListener = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowLeft':
            pressedArrowKeys.value &= ~direction.LEFT;
            break;
        case 'ArrowRight':
            pressedArrowKeys.value &= ~direction.RIGHT;
            break;
        case 'ArrowUp':
            pressedArrowKeys.value &= ~direction.UP;
            break;
        case 'ArrowDown':
            pressedArrowKeys.value &= ~direction.DOWN;
    }
}

export const assignGlobalListeners = () => {
    onMounted(() => {
        window.addEventListener('keydown', addPressedKeyListener)
        window.addEventListener('keyup', removeReleasedKeyListener)
    })
    onUnmounted(() => {
        window.removeEventListener('keydown', addPressedKeyListener)
        window.removeEventListener('keyup', removeReleasedKeyListener)
    })
}

export const useGlobalPressedArrowKeys = () => {

    return {
        pressedArrowKeys,
        isUp,
        isDown,
        isLeft,
        isRight,
    }
}

export const usePressedArrowKeys = () => {
    return {
        pressedArrowKeys,
        addPressedKeyListener,
        removeReleasedKeyListener
    }
}