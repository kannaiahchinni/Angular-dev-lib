import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

const types = {
  'AVAL':'aval',
  'SEL':'sel',
  'RIGHT':'right',
  'LEFT':'left'
};

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html',
  styleUrls: ['./transfer-box.component.css']
})

export class TransferBoxComponent implements OnInit {

  @Input('available') available:any;
  @Input('selected') selected:any;
  @Output('update') updateList = new EventEmitter<any>();
  selectAlls:boolean = false;
  selectAlla:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectAll(type,value) {
    if(type === types.AVAL){
      this.selectAlla = !this.selectAlla;
      value = this.selectAlla;
    }else{
      this.selectAlls =!this.selectAlls;
      value = this.selectAlls;
    }
    this.changeSelected(type === types.AVAL ? this.available : this.selected, value);
  };

  changeSelected(list,value) {
      list.forEach(obj => {
        obj.selected = value;
      });
  }

  selectItem(item) {
    item.selected = item.selected ? false : true;
  }

  moveItem(item,side) {
    item.selected = false;
    let copy = Object.assign({},item);
    if(side === types.RIGHT) {
      this.selected.push(copy);
      item.delete = true;
      this.available = this.removeItems(this.available);
    }else{
      this.available.push(copy);
      item.delete = true;
      this.selected = this.removeItems(this.selected);
    }
    this.updateData();
  }


  updateData() {
    this.selectAlla = false;
    this.selectAlls = false;
    let data = {"selected":this.selected,"available":this.available};
    this.updateList.emit(data);
  }

  removeItems(list) {
    list = list.filter(obj => {
      return obj.delete != true;
    });
    return list;
  }

  moveAll(value) {
    if(types.RIGHT === value) {
        this.moveObjects(this.available, this.selected);
        this.available = this.removeItems(this.available);
    }else if(types.LEFT === value) {
        this.moveObjects(this.selected, this.available);
        this.selected = this.removeItems(this.selected);
    }
    this.updateData();
  }

  moveObjects(source, dest) {
    source.forEach(obj => {
       if(obj.selected || obj.selected == "true"){
        obj.selected = false;
        dest.push(Object.assign({},obj));
        obj.delete = true;
       }
        
    });
  }

}
