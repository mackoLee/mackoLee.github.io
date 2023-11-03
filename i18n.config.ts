export default defineI18nLocale(() => {
    return {
        locale: 'ko',
        messages: {
            en: {
                확인: 'OK',
                취소: 'Cancel',
                저장: 'Save',
                삭제: 'Delete',
                수정: 'Edit',
                추가: 'Add',
                검색: 'Search',
                연결: 'Connect',
                'Macko 놀이터로 가기': 'Go to Macko\'s playground',
                pages:{
                    home: {
                        title: 'Welcome to macko\'s playground',
                        description: "Come and joy the playground."
                    }
                }
            },
            ko: {
                pages: {
                    home: {
                        title: '맥코의 놀이터에 오신 것을 환영합니다',
                        description: "들어와서 놀이터를 즐겨보세요."
                    }
                }
            }

        }
    }
})
