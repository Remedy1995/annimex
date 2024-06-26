import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'app/api-service.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:Router) { }
  ngOnInit(): void {
  
  }
    loginData=new FormGroup({
    email:new FormControl('adjetadjetey45@gmail.com',Validators.required),
    password:new FormControl('1234',Validators.required),
  
  })
  

   Login(){
  if(this.loginData.valid){
    this.service.authSign(this.loginData.value).subscribe({
      next:(data)=>{
      localStorage.setItem('token',data.token);
        console.log(data.token)
          // this.showspinner=false;
          this.router.navigate(['dashboard']);
       },
        error:(error)=>
        {
          // this.notification=error.error.message,
         
            // this.showspinner = false;
            // this.consignmentInformation.reset()
            // Swal.fire({  
            //   position: 'top-end',  
            //   icon: 'error',  
            //   title: this.notification,  
            //   showConfirmButton: true 
            // }) 
        console.log(error)
        },
       complete:()=>console.log("completed"),
       
       })
     
      }
      else{
        // Swal.fire({  
        //   position: 'top-end',  
        //   icon: 'error',  
        //   title:'Field cannot be empty',  
        //   showConfirmButton: true 
        // })
      }
    
    }
   
}


