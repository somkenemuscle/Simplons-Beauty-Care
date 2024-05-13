// bestSellerProducts.js
import { v4 as uuidv4 } from 'uuid';

export const bestSellerProducts = [
    { id: uuidv4(), name: "Exfoliation Mask", price: 25.00, imageSrc: "https://credobeauty.com/cdn/shop/products/marie_veronique_probiotic_exfoliation_mask_at_credo_beatuy_1426x.jpg?v=1694727446", category:'best-seller' },
    { id: uuidv4(), name: "Frizz Hair Oil", price: 12.00, imageSrc: "https://credobeauty.com/cdn/shop/products/reverie_milk_at_credo_beauty_1946x.jpg?v=1694727565", category:'best-seller' },
    { id: uuidv4(), name: "Liquid Liner", price: 19.00, imageSrc: "https://credobeauty.com/cdn/shop/files/Ilia_LiquidLiner_01_1426x.png?v=1712458198", category:'best-seller' },
    { id: uuidv4(), name: "Night Cream", price: 30.00, imageSrc: "https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561", category:'best-seller' },
];
