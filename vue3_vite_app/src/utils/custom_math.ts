export interface Vector2D {
    value: number;
    angle: number;
}

export const getRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addVectors = (vector1: Vector2D, vector2: Vector2D):Vector2D => {
    const x1 = getX(vector1);
    const y1 = getY(vector1);
    const x2 = getX(vector2);
    const y2 = getY(vector2);

    return makeVector2D(x1 + x2,  y1 + y2);
}

export const getX = (vector: Vector2D): number => {
    return vector.value * Math.cos(vector.angle);
}

export const getY = (vector: Vector2D): number => {
    return vector.value * Math.sin(vector.angle);
}

export const makeVector2D = (x: number, y: number): Vector2D => {
    const angle = Math.atan2(y, x);
    const value = Math.sqrt(x * x + y * y);
    return {value, angle};

}