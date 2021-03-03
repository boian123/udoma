
import { Field, ObjectType } from "@nestjs/graphql";
import { model,Schema,Document} from "mongoose";
import { IWaterBill,IBuildingType,IElectricityBill,IOwnership, IData} from "./data.input";



const ownershipSchema = new Schema({
    people: Number,
    ownership: String
})

const buildTypeSchema = new Schema({
    buildingType:String,
    yearOfConstruction:Number,
    
})





const  electricityBillSchema = new Schema({
        provider:{type:String, required: true},
        amount:{type:Number, required:true},
        netUsage:{type:Number},
        heatingType:{type:String, required:true}
})





const waterBillSchema = new Schema({
    provider:{
        type:String,
        required:[true,"please choose a water provider"],
      
    },
    amount:{type:Number, required:true},
    usage:{type:Number,required:true},
 
})

const dataSchema= new Schema({

    ownership:ownershipSchema,
    electricityBill:electricityBillSchema,
    buildType:buildTypeSchema,
    waterBill:waterBillSchema,

})

@ObjectType()
class Data extends Document {

  @Field()
  ownership:IOwnership

  @Field()
  electricityBill:IElectricityBill

  @Field()
  buildType:IBuildingType

  @Field()
  waterBill:IWaterBill
}

export {dataSchema,Data}