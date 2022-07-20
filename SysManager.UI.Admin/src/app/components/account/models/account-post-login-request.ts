export class AccountPostLoginRequest{
    email:string='';
    password:string='';
    
    constructor( _username:string,_email:string, _password:string){
        this.email = _email;
        this.password = _password;    
    }
}