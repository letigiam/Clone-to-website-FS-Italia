
import { Injectable } from "@angular/core";
import { Trip } from "../models/multiTrip";

@Injectable({
    //in questo modo il service lo ignietto in modo globale
    providedIn: 'root' 
})
export class TripService {
    
    multiTrip: Trip[]= [
        {
            id:1,
            name: 'Venezia',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:2,
            name: 'Milano',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:3,
            name: 'Roma',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:4,
            name: 'Torino',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        },
        {
            id:5,
            name: 'Napoli',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:6,
            name: 'Catania',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:7,
            name: 'Genova',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }, 
        {
            id:8,
            name: 'Palermo',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  '
        }
    ]
  TripService: any;

    //  GET
    getTrip(){
        return this.multiTrip
    }

    // POST
    createTrip(multiTrip: Trip) {}

    // PUT
    updateMultiTrip(multiTrip: Trip){
    }

    // DELETE
    deleteUser(multiTrip: Trip) {

        const index = this.multiTrip.indexOf(multiTrip); // indexOf ci restituisce il numero totale dell'array
        if (index > -1) 
        {
            this.multiTrip.splice(index, 1) 
        }
    }

}