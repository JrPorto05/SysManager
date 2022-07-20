import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const routes: Routes =[
    {
        path:'register',
        component: RegisterComponent,
        data: {
               title:'register page'
        }
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
    
    })
    export class AccountRoutingModule{
    }