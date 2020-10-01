import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './model/user.model';
import { CrudService } from './services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-firebase-crud',
  templateUrl: './angular-firebase-crud.component.html',
  styleUrls: ['./angular-firebase-crud.component.scss']
})
export class AngularFirebaseCrudComponent implements OnInit {

  // userList: User;
  public items: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    private crudService: CrudService) {
        this.items = db.collection('/users').valueChanges();
        console.log(this.items);

  }
  ngOnInit(): void {

    this.getRecord();
  }



  createRecord() {

    let record = {
      name: 'Faisal khan',
      email: 'faisalkhan.chat@gmail.com',
      mobile: '9873635068',
      password: 'ertyuiosdfghjk'
    };

    this.crudService.create_user(record).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }


  getRecord() {
    this.crudService.read_user().subscribe(data => {
      console.log(data);
    });


  }


}
