import {defineStore} from "pinia";
import {addVectors} from "@/utils/custom_math";

export const useShipStore = defineStore('ship', {
    state: () => ({
        maxSpeed: 10,
        acceleration: 2.2,
        deceleration: 2,
        location:{
            x: 50,
            y: 50
        },
        movement: {
            speed: 0,
            angle: 0
        },
    }),

    actions: {
        setMaxSpeed(speed: number) {
            this.maxSpeed = speed;
        },
        setAcceleration(acceleration: number) {
            this.acceleration = acceleration;
        },
        setDeceleration(deceleration: number) {
            this.deceleration = deceleration;
        },
        setShipLocationX(x: number) {
            x = Math.max(x, 0);
            x = Math.min(x, 100);
            this.location.x = x;
        },
        setShipLocationY(y: number) {
            y = Math.max(y, 0);
            y = Math.min(y, 100);
            this.location.y = y;
        },
        accelerate(angle: number, rate: number = 1) {
            const result = addVectors(
                {value: this.movement.speed, angle: this.movement.angle},
                {value: this.acceleration*rate, angle}
            );
            this.movement.speed = result.value;
            this.movement.angle = result.angle;
            this.movement.speed = Math.min(this.movement.speed, this.maxSpeed);
        },
        decelerate() {
            this.movement.speed -= this.deceleration;
            this.movement.speed = Math.max(this.movement.speed, 0);
        },
        move(){
            const dx = this.movement.speed * Math.cos(this.movement.angle);
            const dy = this.movement.speed * Math.sin(this.movement.angle);
            this.setShipLocationX(this.location.x + dx);
            this.setShipLocationY(this.location.y + dy);
            this.decelerate();
        }
    }

})