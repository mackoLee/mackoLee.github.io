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
                '튜토리얼 보러가기': 'Go to Tutorial',
                pages:{
                    home: {
                        title: 'Welcome to macko\'s playground',
                        description: "This page is a site built using only the front end, and its goal is to develop a free, dynamic web application by storing data using the Google Sheet API."
                    }
                }
            },
            ko: {
                pages: {
                    home: {
                        title: '맥코의 놀이터에 오신 것을 환영합니다',
                        description: "이 페이지는 프론트엔드만을 이용하여 구축한 사이트이며 Google Sheet API를 활용하여 데이터를 저장하여 무료로 동적인 웹 어플리케이션을 개발해 보는것을 목표로 하고 있습니다."
                    }
                }
            }

        }
    }
})
