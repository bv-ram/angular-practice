import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender','email'];

  dataSource:any
  data:any
  constructor(private authService:AuthenticationService){

  }
  currentPage = 1
  totalPages = 1
  totalItems = 0
  itemsPerPage = 4
  ngOnInit(){

    this.allData()
  }
  allData(){
    this.authService.getAllUsesr(this.currentPage,this.itemsPerPage).subscribe((res)=>{
      this.data = res.data
      this.dataSource = res.data.users
      this.totalPages = res.data.pages
      this.totalItems = res.data.total
    })
  }

  changePage(page:any){
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.allData();
    }
  }

  
}
