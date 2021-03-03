import {WaterProvider,BuildingMaterial,OwnershipType,HeatingType,ElectricityProvider} from "./Enum";
import { Document } from "mongoose";
import { Field, InputType } from "@nestjs/graphql";



@InputType()
class IOwnership extends Document {

    @Field()
    people:Number

    @Field()
    ownership:OwnershipType
}

@InputType()
class IBuildingType extends Document{

    @Field()
    buildingType: BuildingMaterial

    @Field()
    yearOfConstruction: number
}

@InputType()
class IElectricityBill extends Document {

    @Field()
    provider: ElectricityProvider

    @Field()
    amount: number

    @Field()
    netUsage: number

    @Field()
    heatingType: HeatingType
}


@InputType()
class IWaterBill extends Document {

    @Field()
    provider:WaterProvider

    @Field()
    amount: number

    @Field()
    usage: number

}


@InputType()
class IData extends Document {

    @Field()
    ownership:IOwnership

    @Field()
    electricityBill:IElectricityBill

    @Field()
    buildingType:IBuildingType

    @Field()
    waterBill:IWaterBill
}

export {IBuildingType,IElectricityBill,IWaterBill,IOwnership,IData}