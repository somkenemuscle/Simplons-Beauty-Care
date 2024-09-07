import { v4 as uuidv4 } from 'uuid';

export const hairCareProducts = [
    { id: uuidv4(), name: "Shampoo", price: 12.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Restorative_Conditioner_02_990x.png?v=1711679633", category: 'hair' },
    { id: uuidv4(), name: "Conditioner", price: 10.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Necessaire_TheShampoo_Back_02_990x.png?v=1699994883", category: 'hair' },
    { id: uuidv4(), name: "Hair Mask", price: 15.00, imageSrc: "https://credobeauty.com/cdn/shop/products/H.A.P.I.Shampoo_990x.png?v=1694727346", category: 'hair' },
    { id: uuidv4(), name: "Hair Oil", price: 15.00, imageSrc: "https://credobeauty.com/cdn/shop/products/Bright-Balance-Hairbath-10oz-bg-web_990x.jpg?v=1694727353", category: 'hair' },
    { id: uuidv4(), name: "Hair Serum", price: 11.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Alo_Shine_Shampoo_01_990x.png?v=1714230470", category: 'hair' },
    { id: uuidv4(), name: "Hair Spray", price: 22.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Restorative_Conditioner_03_990x.png?v=1711658931", category: 'hair' }
];
