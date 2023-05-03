
export const useWindowSizeUtil = () => {
    const getWidth = ()=>window.innerWidth;
    const getHeight = ()=>window.innerHeight;
    return {
        getWidth,
        getHeight,
    }
}