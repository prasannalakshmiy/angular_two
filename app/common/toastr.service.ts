import {Injectable} from '@angular/core'
// toastr is on global scope .. so to avoid this we created a toastr service
declare let toastr : any // Typescript is not knowing what toastr is ...so, we tell it that it is a known variable by declaring it

@Injectable()
export class ToastrServices{
       

     success(message:string, title?: string){
          toastr.success(message , title)
     }
     info(message:string, title?: string){
          toastr.info(message , title)
     }
     warning(message:string, title?: string){
          toastr.warning(message , title)
     }
     error(message:string, title?: string){
          toastr.error(message , title)
     }
 
}
