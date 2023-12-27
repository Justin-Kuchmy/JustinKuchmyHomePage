import { StringDoublePair } from "./StringDoublePair";

export interface PayloadData 
{

    name: String;
    ingredients:  StringDoublePair[]  
    productReturnValue: number
    baseItemRequirements:  Map<String, StringDoublePair> 

 }