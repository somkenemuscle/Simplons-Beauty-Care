import { v4 as uuidv4 } from 'uuid';

export const makeupProducts = [
    { id: uuidv4(), name: "Foundation", price: 29.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Ilia_TrueSkinSerumConcealer_01_SC0.25_990x.png?v=1712417950", category: 'makeup' },
    { id: uuidv4(), name: "Mascara", price: 12.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Ilia_MultiStick_01_AllOfMe_990x.png?v=1712422758", category: 'makeup' },
    { id: uuidv4(), name: "Lipstick", price: 14.00, imageSrc: "https://credobeauty.com/cdn/shop/files/GenSee_SpectatorSportMascara_01_Black_5b3c4176-9cb0-4b89-bc29-4806e75852f8_990x.png?v=1711385122", category: 'makeup' },
    { id: uuidv4(), name: "Eyeshadow Palette", price: 39.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Ilia_SuperSerumSkinTint_01_ST0.5_990x.png?v=1712457488", category: 'makeup' },
    { id: uuidv4(), name: "Blush", price: 19.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Ilia_LimitlessLashMascara_01_990x.png?v=1713026175", category: 'makeup' },
    { id: uuidv4(), name: "Highlighter", price: 24.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Exa_HighFidelityFoundation_01_Fazon110_990x.png?v=1709702818", category: 'makeup' }
];
