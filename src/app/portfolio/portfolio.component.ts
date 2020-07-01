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
        {field: 'pyear', resizable: false},
    ]
}

  columnDefs = [
    {headerName: 'S.No', field: 'sno', sortable: true},
    {headerName: 'Project Year', field: 'pyear', sortable: true, resizable: false},
    {headerName: 'Category', field: 'cat', sortable: true, resizable: true},
    {headerName: 'Client', field: 'client', sortable: true},
    {headerName: 'Role', field: 'role', sortable: true},
    {headerName: 'Duration (in months)', field: 'duration', sortable: true},
    {headerName: 'Samples', field: 'sample'},
    {headerName: 'URL', field: 'url', cellRenderer: function(params) {
      return '<a href="https://www.ziperase.com/" target="_blank">'+ params.value+'</a>'
  }},
];

rowData = [
    { sno: 1, pyear: 2020, cat: 'UX Design', client: 'ZipErase', role: 'UX & UI Architect', duration: 2, sample:'', url: 'ZipErase'},
    { sno: 2, pyear: 2019, cat: 'UI Design', client: 'SilverSheet', role: 'UX & UI Architect', duration: 4, sample:'NA', url: 'SilverSheet'}
];

  constructor() { }

  ngOnInit() {
  }


  
  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

}
