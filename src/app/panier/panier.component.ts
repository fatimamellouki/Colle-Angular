import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  panier: any[] = [];
  total: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.panier = this.dataService.getpanier();
    this.updateTotal();
  }

  removeFromPanier(produitsId: number) {
    this.dataService.removeFromPanier(produitsId);
    this.panier = this.dataService.getpanier();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.dataService.calculateTotal();
  }
}
