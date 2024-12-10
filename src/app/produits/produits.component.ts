import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.produits = this.dataService.getProduits();
  }

  addToPanier(product: any) {
    this.dataService.addToPanier(product);
  }

  goToCart(): void {
    this.router.navigate(['/panier']);
  }
  
}
