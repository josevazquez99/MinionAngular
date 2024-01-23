export interface Minion {
    id: number,
    name: string,
    bio: string,
    img: string,
    birth: string,
    side: string

}
/*
Paso 1: Crear el Proyecto Angular

ng new proyecto-angular-pokemons
cd proyecto-angular-pokemons
Paso 2: Crear Archivo JSON con Datos de Pokemons

Crea un archivo llamado pokemons.json en la raíz del proyecto y agrega algunos datos de ejemplo:

[
  { "id": 1, "name": "Bulbasaur", "type": "Grass" },
  { "id": 2, "name": "Charmander", "type": "Fire" },
  { "id": 3, "name": "Squirtle", "type": "Water" }
  // ... Agrega más datos si es necesario
]
Paso 3: Configurar json-server

Instala json-server para simular una API con el archivo JSON:


npm install -g json-server
json-server --watch pokemons.json
Esto iniciará el servidor en http://localhost:3000.

Paso 4: Crear Módulos y Componentes


ng generate module dashboard
ng generate component dashboard/dashboard
ng generate module products
ng generate component products/product-list
ng generate component products/product-form
ng generate service products/product
ng generate module pokemons
ng generate component pokemons/pokemon-list
ng generate component pokemons/pokemon-form
ng generate service pokemons/pokemon
Paso 5: Configurar Enrutamiento

Modifica app-routing.module.ts para configurar el enrutamiento:

typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
Paso 6: Configurar Servicios

En cada módulo, crea un servicio para gestionar los datos:

product.service.ts:

typescript
Copy code
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  // Agrega más métodos según sea necesario
}
Haz lo mismo para pokemon.service.ts.

Paso 7: Implementar Peticiones HTTP y Formularios

Modifica los componentes para utilizar los servicios y realizar peticiones HTTP:

product-list.component.ts:

typescript
Copy code
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
Hacer lo mismo para pokemon-list.component.ts y otros componentes según sea necesario.

Paso 8: Personalizar la Plantilla de Bootstrap

Modifica la plantilla Bootstrap proporcionada según las necesidades de tu proyecto. Puedes personalizar las clases, estilos y estructura HTML según lo requieras.

Paso 9: Comunicación entre Componentes

Implementa la comunicación entre componentes usando @Input y @Output según sea necesario para tus casos de uso específicos.

Paso 10: Ejecutar la Aplicación

bash
Copy code
ng serve


*/