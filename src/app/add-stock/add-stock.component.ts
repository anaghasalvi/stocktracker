import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() selectCompany = new EventEmitter<string[]>();
  public options: string[] = ['Reliance', 'HDFC', 'Yahoo']
  public selected :string[]= ["Reliance"]

  public messages=[];
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.closePopup.emit(false);
  }
  
  checked(item) {
    if (this.selected.indexOf(item) != -1) {
      return true;
    }
  }

  onChange(checked, item) {
    if (checked) {
      this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }

  save() {
    this.messages.push(this.selected.sort());
    this.selectCompany.emit(this.messages);
    this.closePopup.emit(false);
  }

}
