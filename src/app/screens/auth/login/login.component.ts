import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string =''

  constructor(private router: Router ,private route: ActivatedRoute,) { }


  ngOnInit(): void {
  }
  validateEmail(email:string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }

  login(f) {
    console.log(f);

    if (!this.validateEmail(f.email)){
      alert('Not a valid email')
    }else if (f.email !== 'khaled.naili@esprit.tn'){
      this.message = 'invalid email'
    }else if (f.password !== '123456789'){
      this.message = 'invalid password'
    }else{
      this.router.navigate(['post/index',{email:f.email}]);
    }
  }


}
