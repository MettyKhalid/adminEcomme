import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  selected: Customer[]=[];
  @Input()
  customers: Customer[]=[];

  constructor() { };

  ngOnInit(): void {};

  onAdd(){};
  onDelete(){};
  onEdit(){};
  onExportAll(){};
  onExportSelected(){};

  onDeleteItem(item: Customer){};
  onEditItem(item: Customer){};

}
