export function useLocaleDayjs(){
    return useDayjs().locale(useI18n().locale.value);
}