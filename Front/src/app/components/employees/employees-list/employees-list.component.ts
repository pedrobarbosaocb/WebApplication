import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id:'1',
      name:'John Cezar',
      email: 'johncezar@gmail.com',
      phone: '+55(11)01234-5678',
      salary: 3578,
      department: 'IT'
    },
    {
      id:'2',
      name:'Carla Perez',
      email: 'carlaperez@gmail.com',
      phone: '+55(11)01234-5678',
      salary: 3578,
      department: 'Marketing'
    },
    {
      id:'3',
      name:'João Cézar',
      email: 'joaocezar@gmail.com',
      phone: '+55(11)01234-5678',
      salary: 3578,
      department: 'TI'
    },
  ];

  constructor() { }

  ngOnInit(): void {}

}
