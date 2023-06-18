import {defineStore} from "pinia";

export const useCouponStore = defineStore('coupon',{
    state: () => ({
        userList: [
            {
                userId: 1,
                name: '이윤건',
                nickname: '이윤건',
                couponList: [
                    {
                        name: '쿠폰1',
                        description: '쿠폰1 설명',
                        count: 0,
                        isUsed: false,
                        question: '당신의 고향은 어디인가요?',
                        answer: '진해',
                    }
                ]
            }
        ],
        selectedUserId: 0,
        selectedCouponId: 0,
        selectedCouponList: []
    }),
    actions: {
        setSelectedUserId(id: number) {
            this.selectedUserId = id;
        },
        setSelectedCouponId(id: number) {
            this.selectedCouponId = id;
        },
        setSelectedCouponList(list: any) {
            this.selectedCouponList = list;
        },
        getInitialCouponId(couponList: any) {
            return couponList[couponList.length-1].id
        },
        async selectUser(id: number) {
            this.setSelectedUserId(id);
            await this.loadCouponList()

        },
        async loadCouponList() {
            const user = this.userList.find(user => user.userId === this.selectedUserId);
            if (user) {
                this.setSelectedCouponList(user.couponList);
                const initCouponId = this.getInitialCouponId(user.couponList);
                this.setSelectedCouponId(initCouponId)
            }
        }
    },
    persist:{
        storage: localStorage,
        paths: ['coupon_list']
    }



})