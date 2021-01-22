import { AbstractControl } from '@angular/forms';

export function validateDOB(control: AbstractControl)
{

    let currentdate = new Date();
    // console.log(currentdate)
    let currentDateHour = currentdate.setHours(0,0,0,0);

    let controlValue = new Date(control.value);
    let controlDateHour = controlValue.setHours(0,0,0,0);
    // console.log(controlValue)
    let x = controlDateHour - currentDateHour;

    let forbidden = false;
    if(x<=0){
        forbidden= true;
    }
    return forbidden ? { 'forbiddenName':{value: control.value}}: null;
    // return  null;
}