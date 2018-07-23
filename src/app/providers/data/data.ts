import {Injectable} from "@angular/core";

@Injectable()
export class DataProvider{
    public items: any;
    constructor() {
        //default hardcoded data
        this.items = [{
            image: '../assets/icon_desert.svg',
            title: 'Desert',
            detail: 'A desert is a barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
            date: 'Fri 2018 07 20',
            isNew: 'new',
            },
            {
            image:'',
            title: 'Forest',
            detail: 'A forest is a large area dominated by trees.',
            date: 'Fri 2018 07 20',
            isNew: 'old',
            },
            {
            image: '../assets/icon_hill.svg',
            title: 'Hill',
            detail: 'A hill is a landform that extends above the surrounding terrain.',
            date: 'Thu 2018 07 19',
            isNew: 'old',
            },
            {
            image: '../assets/icon_sea.svg',
            title: 'Sea',
            detail: 'A sea is a large body of salt water that is surrounded in whole or in part by land.',
            date: 'Thu 2018 07 19',
            isNew: 'old',
            }
            ];
    };
    //insert new item to head of list
    public insert(item){
        this.items.unshift(item);
    }

}