import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  gridOptions: {
    defaultColDef: {
        resizable: true
    },
    columnDefs: [
        {field: 'name'},
        {field: 'age'},
        {field: 'address', resizable: false},
    ]
}

  columnDefs = [
    {headerName: 'S.No', field: 'sno', sortable: true, resizable: true},
    {headerName: 'Category', field: 'cat', sortable: true, resizable: true},
    {headerName: 'Client', field: 'client', sortable: true},
    {headerName: 'Role', field: 'role', sortable: true},
    {headerName: 'Duration (in months)', field: 'duration', sortable: true},
    {headerName: 'Samples', field: 'sample'},
    {headerName: 'URL', field: 'url'},
];

rowData = [
    { sno: 1, cat: 'UX Design', client: 'ZipErase', role: 'UX & UI Architect', duration: 2, sample:'', url: ''},
];

  constructor() { }

  ngOnInit() {
  }


  
  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

}
