import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  propertyBindingValue: boolean;
  propertyBindingValueString: string;

  constructor() { }

  ngOnInit(): void {
    this.propertyBindingValue = true;
    this.propertyBindingValueString = 'true';

    setTimeout(() => {
      this.propertyBindingValue = false;
      this.propertyBindingValueString = 'false';
    }, 3000)
  }

}
