import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Models/Product';


@Component({
  selector: 'app-product-info',
  template: `
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="p-4">
        <div *ngIf="CardOpen" class="flex " id="cardPopup">
          <div class="w-1/2">
            <p class="text-center"><strong>{{cleanStoreName(product.store)}}</strong></p>
            <div class="card-header">
              <img src="{{product.imageUrl}}" class="h-24 w-full object-contain" alt="Product Image">
            </div>
          </div>
            <div class="w-1/2 flex flex-col justify-center items-center">
              <h2 class="h-1/5 text-center"><strong>{{product.title}}</strong></h2>
              <br>
              <p class="h-1/5"><strong>Price:</strong> {{product.price}}</p>
              <p class="h-1/5"><strong>Unit Size:</strong> {{product.unitSize}}</p>
              <p class="h-1/5"><strong>Unit Price:</strong> {{product.unitPrice}}</p>
              <a class="h-1/5" href="{{product.link}}" target="_blank"><strong>View Product</strong></a>
            </div>
        </div>
    </div>
  </div>
  `,
  styleUrls: []
})
export class ProductInfoComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @Input() StoreName: String = "";
  @Input() StoreLocation: String = "";
  CardOpen: boolean = true;
  @Input() product: Product =
  {
    store: "SuperStore",
    title: "Ground Beef",
    imageUrl: "https://assets.shop.loblaws.ca/products/21125124/b1/en/front/21125124_front_a01_@2.png",
    price: "$7.49",
    unitSize: "500g",
    unitPrice: "$1.50 / 100g",
    link: "https://www.realcanadiansuperstore.ca/p/21125124_EA"
  }
  showCard()
  {
    this.CardOpen = !this.CardOpen;
  }
  cleanStoreName(Name: String): String
  {
    return Name.split("_")[0];
   }
  buttonClicked(Name: String)
  {
    // Name = Name.toLowerCase();
    // if (Name === "superstore") {
      //   this.product = this.SuperStoreRes[0];
    //   console.log("Superstore ", this.product);
    // }
    // else if (Name === "nofrills")
    // {
    //   this.product = this.NoFrillsRes[0];
    //   console.log("nofrills ", this.product);
    //  }
    // else
    // {
    //   this.product = this.SobeysRes[0];
    //   console.log("Sobeys ", this.product);
    //  }
   }
}
