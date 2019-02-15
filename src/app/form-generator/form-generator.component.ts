import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  items = ['select'];
  options = ['textbox', 'dropdown', 'button'];

    // items = [
  //   {name: 'first', description: 'description'},
  //   {name: 'second', description: 'second description'}
  // ];

  // formFields = [
  //   {
  //     type: 'input',
  //     label: 'Firstname',
  //     inputType: 'text',
  //     name: 'name',
  //     validations: [
  //       {
  //         name: 'required',
  //         required: 'true',
  //         message: 'Name Required'
  //       },
  //       {
  //         name: 'maxLength',
  //         maxLength: '20',
  //         message: 'Accept Max Length 20'
  //       },
  //       {
  //         name: 'pattern',
  //         message: 'Accept only text'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'Lastname',
  //     inputType: 'text',
  //     name: 'name',
  //     validations: [
  //       {
  //         name: 'required',
  //         required: 'true',
  //         message: 'Name Required'
  //       },
  //       {
  //         name: 'maxLength',
  //         maxLength: '50',
  //         message: 'Accept Max Length 50'
  //       },
  //       {
  //         name: 'pattern',
  //         message: 'Accept only text'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'select',
  //     label: 'AddressType',
  //     name: 'addressType',
  //     value: 'Business',
  //     options: [
  //       'Business',
  //       'Residence'
  //     ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'StreetAddress',
  //     inputType: 'text',
  //     name: 'streetName'
  //   },
  //   {
  //     type: 'input',
  //     label: 'City',
  //     inputType: 'text',
  //     name: 'city'
  //   },
  //   {
  //     type: 'input',
  //     label: 'State',
  //     inputType: 'text',
  //     name: 'state'
  //   },
  //   {
  //     type: 'input',
  //     label: 'Country',
  //     inputType: 'text',
  //     name: 'country'
  //   },
  //   {
  //     type: 'button',
  //     label: 'Save'
  //   }
  // ];

  constructor() { }

  // newItemInput(event: any){
  //   this.newItemName = event.target.value;
  // }

  addItems() {
    this.items.push('selector');
  }

  ngOnInit() {
  }

}
