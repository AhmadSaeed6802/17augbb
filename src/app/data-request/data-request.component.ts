import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Todo';

@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  template: `
   <h2>Data from API:</h2>
     <p>{{ apiData | json }}</p> `
})
export class DataRequestComponent implements OnInit {
  apiData!: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('http://localhost:3013/GetListOfUsers')
      .subscribe(
        (response) => {
          this.apiData = response;
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
  }
  }



// @Component({
//   selector: 'app-data',
//   template: `
//     <h2>Data from API:</h2>
//     <p>{{ apiData | json }}</p>
//   `
// })
// export class DataComponent implements OnInit {
  
// }

