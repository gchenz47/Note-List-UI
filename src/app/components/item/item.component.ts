import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  public currentItem;
  public id;
  constructor(private router: Router,private dataProvider: DataProvider, private route: ActivatedRoute){  }
  
  ngOnInit() {
    //passing seleted item data from listComponent to itemComponent
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.id = id;
    if(id !== -1){
      this.route.queryParams.subscribe(params => {
        this.currentItem = JSON.parse(params['currentItem']);
     })
    }
  }
// store input data to new item in list
  StoreData(titl,detl,img){
    let newItem = {
      image: img,
      title: titl,
      detail: detl,
      date: this.getDay(),
      isNew: 'new'
    }
    this.dataProvider.insert(newItem);
    this.router.navigate(['']);
  }

  //get current date when item is registered
  private getDay(){
    let day;
    switch(new Date().getDay()){
      case 0:
        day = "Sun";
        break;
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tue";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thu";
        break;
    case 5:
        day = "Fri";
        break;
    case 6:
        day = "Sat";
    }
    return (day +  ' ' + new Date().toJSON().slice(0,10).replace(/-/g,' '));
  }
  
}
