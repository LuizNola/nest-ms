import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RouteDocument = Route & Document

@Schema()
export class Route {
    @Prop()
    title: string

    @Prop(raw({
        lat: { type: Number },
        lng: { type: Number }
    }))
    startPoint: { lat: number, lng: number }

    @Prop(raw({
        lat: { type: Number },
        lng: { type: Number }
    }))
    endPoint: { lat: number, lng: number }
}


export const RouteSchema = SchemaFactory.createForClass(Route)