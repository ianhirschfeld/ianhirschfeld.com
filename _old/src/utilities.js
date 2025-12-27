export const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const randomMultiplier = () => (Math.random() < 0.5 ? -1 : 1)
