import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  produits = [
    { id: 1, name: 'Tendance bracellet', price: 150, image: 'https://tse2.mm.bing.net/th?id=OIP.7ZcFpnuxbyH3aeTuTqOthgHaHa&pid=Api&P=0&h=220' },
    { id: 2, name: 'Bracelet de Luxe ', price: 200, image: 'https://tse3.mm.bing.net/th?id=OIP.gHvCxVTKbkSGTLJ2ZSouXAAAAA&pid=Api&P=0&h=220' },
    { id: 3, name: 'luxury Cristal Heart', price: 239, image: 'https://tse1.mm.bing.net/th?id=OIP.ZoWqARPyUl3MTTHXNnAPBwHaHa&pid=Api&P=0&h=220' },
    { id: 4, name: 'Tendance bracelet', price: 100, image: 'https://tse2.mm.bing.net/th?id=OIP.3AsT2ycl6wEeg5CnkypwqwHaD4&pid=Api&P=0&h=220' },
    { id: 5, name: 'luxary gold', price: 200, image: 'https://tse2.mm.bing.net/th?id=OIP.pAZVUqZJ_rUX447eWGUprAAAAA&pid=Api&P=0&h=220' },
    { id: 6, name: 'cristal', price: 300, image: 'https://tse4.mm.bing.net/th?id=OIP.mAFTESQJn1aiiploJIDz_gHaHa&pid=Api&P=0&h=220' },
  
  ];
  panier: any[] = [];
  getProduits() {
    return this.produits;
  }

  addToPanier(produit: any) {
    const item = this.panier.find(p => p.id === produit.id);
    if (item) {
      item.quantity++;
    } else {
      this.panier.push({ ...produit, quantity: 1 });
    }
  }

  getpanier() {
    return this.panier;
  }

  removeFromPanier(produitsId: number) {
    this.panier = this.panier.filter(p => p.id !== produitsId);
  }

  calculateTotal() {
    return this.panier.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  constructor() { }
}
