import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PayloadData } from './Entities/PayloadData'
import { StringDoublePair } from './Entities/StringDoublePair';

@Injectable({
  providedIn: 'root'
})
export class MaterialCalculatorService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  itemList: String[] = [];
  data: PayloadData =
  {
    name: "",
    ingredients:  [],  
    productReturnValue: 0,
    baseItemRequirements:  new Map<String, StringDoublePair>()
  }
  GetItemsRawMaterialList$?: Observable<PayloadData>;
  ngOnInit(): void {
    this.httpClient.get(`http://localhost:8080/all`).pipe(
      map((payload: any) => {
        this.itemList = payload;
      })
    );
  }
  GetItemsRawMaterialList(): Observable<any> {
    return this.httpClient.get(`https://raw.githubusercontent.com/Justin-Kuchmy/data/main/ItemData.json`).pipe(
      map((payload: any) => {
        // Transform the received payload as needed
        return payload;
      })
    );
  }
  // GetListOfAllItems(): String[] {
  //   return this.itemList;
  // }

}
