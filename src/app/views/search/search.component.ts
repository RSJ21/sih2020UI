import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '/home/oem/Downloads/student-app-ui-master/src/app/services/http/http.services';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoaded: boolean;
  TrainList: any = [];
  location: any;
  role: any;
  teacherId: any;
  isSubmit: any;
  isRightSectionOpen: Boolean;
  count: any;
  institutionList: any = [];
  parameters: any = [];
  selectedInstitution: any;
  isAdmin: any;
  
  from: any = 1;
  to: any;
  date: any;
  constructor(private service: HttpService, private route: ActivatedRoute, private router: Router, private _notificationsService: NotificationsService) {


  }



  ngOnInit() {
    //this.getAllStudents();
    this.isSubmit=false;
    this.getAllStudents();
  }

  getTrains(){
    let toSend = {};
    toSend = {
      "education": this.from,
      "research": this.to,
      "infra": this.date
    };
    this.TrainList=[{
      'name': 'Kanyakumari express',
      'from': 'kanyakumari',
      'to': 'Chennai',
      'number': '3212',
      'duration': '9hrs' ,
      'parameters': [
        {
          'name':'cancellation trends',
          'value': '50'
        },
        {
          'name':'confirmation probability',
          'value': '20'
        },
        {
          'name':'reach on time',
          'value': '80'
        },
        {
          'name':'passenger rating',
          'value':'70'
        }
      ]
    },
    {
      'name': 'Visakapatnam express',
      'from': 'kanyakumari',
      'to': 'Chennai',
      'number': '3212',
      'duration': '9hrs' ,
      'parameters': [
        {
          'name':'cancellation trends',
          'value': '50'
        },
        {
          'name':'confirmation probability',
          'value': '20'
        },
        {
          'name':'reach on time',
          'value': '80'
        },
        {
          'name':'passenger rating',
          'value':'70'
        }
      ]
    }];
    
    
  }
  showtrain(){
    this.isSubmit=true;
    
  }
  getAllStudents() {
    // this.service.get('/student/all').then((data)=>{
    //   console.log(data);
    this.institutionList = [
    {
      'name': 'Chennai Express',
      'from': 'Chennai',
      'to': 'Vizag',
      'number': '22870',
      'duration': '3hrs' ,
      'break': '-',
      'ct': '50',
      'cf' : '40',
      'rot' : '80',
      'pr' : '70',
      'arrt':'0800',
      'deptt':'1100'
      
    },
    {
      'name': 'Samati Express',
      'from': 'Vizag',
      'to': 'Delhi',
      'number': '22870',
      'duration': '10hrs' ,
      'break': '3hrs',
      'ct': '50',
      'cf' : '40',
      'rot' : '80',
      'pr' : '70',
      'arrt':'1300',
      'deptt':'2300'
      
    }
   ]; 
  
  
    //this.studentsListFinal = this.studentsList/* .slice(0,20) */;
    this.location = [{ lat: 11.059821, lng: 78.387451 }];
    // this.calculatePrediction(this.studentsListFinal);

   

    // }).catch((error)=>{

    // });
  
  }

}