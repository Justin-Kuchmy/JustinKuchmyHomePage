import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Product } from 'src/app/FoodPriceFinder/Models/Product';
import { Store } from 'src/app/FoodPriceFinder/Models/Store';
import { StoreList } from 'src/app/FoodPriceFinder/Models/StoreList';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  selector: 'app-home',
  template: `
    <router-outlet></router-outlet>
    <div class="justify-center center-items text-center">
      <input class="border border-black rounded-lg border" type="text" [(ngModel)]="searchQuery" placeholder="Enter search term">
      <button (click)="Search()" class="bg-green-200 rounded-lg border border-green-800">Search</button>
    </div>
    <br>
    <div class="flex mt-2  ">
    <div class="w-2/4 border border-green-800">
      <google-map 
      height="750px"
      width="100%"
      [center]="center"
      [zoom]="zoom">
      <map-marker #marker="mapMarker"
    *ngFor="let markerPosition of addedMarkers let i = index"
    [position]="markerPosition"
    (mapClick)="openInfoWindow(marker, i)"></map-marker>
    </google-map>
    </div>
      <div class="w-1/4 h-[750px] overflow-y-auto border border-black h-[750px]">
        <div *ngFor="let result of AllResults">
          <app-product-info 
          (mouseenter)="showMarkers(cleanStoreName(result.store))" 
          *ngIf="showResults"
          [product] = "result"
          [StoreLocation]="this.windowData"
          [StoreName]="this.windowData"
          ></app-product-info>
        </div>
      </div>
  </div>
  `,
  styles: [
  ]
})
export class FoodFinderHomeComponent implements OnInit{
  onHover() {
    throw new Error('Method not implemented.');
}

    constructor() { }
    storeDataArray: Product[] = []
    searchQuery: String = "";
    superStoreResults: Product[] = [];
    noFrillsResults: Product[] = [];
    sobeysResults: Product[] = [];
    AllResults: Product[] = [];
    ngOnInit(): void
    {
        fetch('https://raw.githubusercontent.com/Justin-Kuchmy/StoreData/main/StoreData.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
            .then(data => {
                const flattenedData = data.flat();
    
                // Map the flattened list to 'StoreData'
                const tempArray: Product[] = flattenedData.map((item: Product) => {
                // Convert each 'Store' object into 'StoreData'
                return {
                    store: item.store,
                    title: item.title,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    unitSize: item.unitSize,
                    unitPrice: item.unitPrice,
                    link: item.link,
                };
                
                });
                this.storeDataArray = tempArray;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
       
        
    }
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    @ViewChild(ProductInfoComponent)
    appProductInfo!: ProductInfoComponent;
    center: google.maps.LatLngLiteral = { lat: 42.98, lng: -81.24 };
    zoom = 12;
    StoreLocations: Store[] = StoreList;
    selectedMarkerIndex: number | undefined;
    windowData: String = "Default";
    showResults: boolean = false;
    @ViewChild('map') map: any;
       
    markerPositions: google.maps.LatLngLiteral[] = [
        { "lat": this.StoreLocations[0].Lat, "lng": this.StoreLocations[0].Lng },
        { "lat": this.StoreLocations[1].Lat, "lng":  this.StoreLocations[1].Lng},
        { "lat": this.StoreLocations[2].Lat, "lng":  this.StoreLocations[2].Lng},
        { "lat": this.StoreLocations[3].Lat, "lng":  this.StoreLocations[3].Lng},
        { "lat": this.StoreLocations[4].Lat, "lng":  this.StoreLocations[4].Lng},
        { "lat": this.StoreLocations[5].Lat, "lng":  this.StoreLocations[5].Lng},
    ];
    addedMarkers: google.maps.LatLngLiteral[] = [];
    infoWindowContents: string[] = this.StoreLocations.map(store => store.Name);

    infoWindowOptions: google.maps.InfoWindowOptions = {
        minWidth: 150,
    };
    cleanStoreName(Name: String): String
    {
    return Name.split("_")[0];
   }
    showMarkers(StoreName: String) {
        this.hideMarkers()
        StoreList.filter(Name => Name.Name === StoreName).forEach(position => {
            const pos: google.maps.LatLngLiteral = { lat: position.Lat, lng: position.Lng}
            this.addedMarkers.push(pos); // Store LatLngLiteral in the array
            new google.maps.Marker({
                position: pos,
                map: this.map // Add marker to the map
            });
        });
        
      }
      hideMarkers() {
        this.addedMarkers.forEach(position => {
          const marker = new google.maps.Marker({ position: position });
          marker.setMap(null); // Remove marker from the map
        });
        this.addedMarkers = []; // Clear the array
      }
      
    openInfoWindow(marker: MapMarker, index: number) {
        if (this.infoWindow != undefined) {
            this.windowData = this.StoreLocations[index].Name;
            this.appProductInfo.buttonClicked(this.windowData);
            this.infoWindow.open(marker);
        }
        
    }
    setSelectedMarker(index: number) {
        this.selectedMarkerIndex = index;
    }
    handleMarkerClick()
    { 
       
    }
    Search() {
        const productsContainingQuery = this.storeDataArray.filter((product: Product) =>
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            const groupedByStore = productsContainingQuery.reduce((acc, product) => {
                const storeName = product.store.split('_')[0]; // Extracting store name
              
                if (!acc[storeName]) {
                  acc[storeName] = [];
                }
              
                acc[storeName].push(product);
                return acc;
              }, {} as { [key: string]: Product[] });
              
              const sortListByPrice = (list: Product[]) => {
                return list.sort((a, b) => {
                  // Convert price strings to numbers for comparison
                  const priceA = parseFloat(a.price.replace('$', ''));
                  const priceB = parseFloat(b.price.replace('$', ''));
              
                  return priceA - priceB;
                });
              };
        
        // Now, you'll have three separate arrays based on 'store' property
        const results = sortListByPrice(productsContainingQuery);
        const superStore = sortListByPrice(groupedByStore['SuperStore']);
        this.superStoreResults = superStore;

        const noFrills = sortListByPrice(groupedByStore['NoFrills']);
        this.noFrillsResults = noFrills;

        const sobeys = sortListByPrice(groupedByStore['Sobeys']);
        this.sobeysResults = sobeys;
        this.AllResults = results;
        this.showResults = true;

              
    }
}
