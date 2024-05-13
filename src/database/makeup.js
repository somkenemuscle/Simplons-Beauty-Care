import { v4 as uuidv4 } from 'uuid';

export const makeupProducts = [
    { id: uuidv4(), name: "Foundation", price: 29.00, imageSrc: "", category: 'makeup' },
    { id: uuidv4(), name: "Mascara", price: 12.00, imageSrc: "", category: 'makeup' },
    { id: uuidv4(), name: "Lipstick", price: 14.00, imageSrc: "", category: 'makeup' },
    { id: uuidv4(), name: "Eyeshadow Palette", price: 39.00, imageSrc: "", category: 'makeup' },
    { id: uuidv4(), name: "Blush", price: 19.00, imageSrc: "", category: 'makeup' },
    { id: uuidv4(), name: "Highlighter", price: 24.00, imageSrc: "", category: 'makeup' }
];
