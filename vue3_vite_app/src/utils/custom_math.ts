interface Vector2D {
    value: number;
    angle: number;
}

export const getRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addVectors = (vector1: Vector2D, vector2: Vector2D):Vector2D => {
    const x1 = vector1.value * Math.cos(vector1.angle) ;
    const y1 = vector1.value * Math.sin(vector1.angle);
    const x2 = vector2.value * Math.cos(vector2.angle);
    const y2 = vector2.value * Math.sin(vector2.angle);
    const x = x1 + x2;
    const y = y1 + y2;

    const angle = Math.atan2(y, x);
    const value = Math.sqrt(x * x + y * y);
    console.log(x1,y1)
    console.log(x2,y2)
    // console.log(value, angle);
    return {value, angle};
}

