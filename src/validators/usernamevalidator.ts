import {FormControl } from '@angular/forms';

export class UsernameValidator{
    static checkUsername(control: FormControl): any {
 
        return new Promise(resolve => {
    
        //Fake a slow response from server
            console.log("running the checkusername validator");
        setTimeout(() => {
            if(control.value == "2348182120030"){
    
            resolve({
                "username taken": true
            });
    
            } else {
            resolve(null);
            }
        }, 2000);
    
        });
    }
}