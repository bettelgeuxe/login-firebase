import { Component, OnInit } from '@angular/core';
//import { AngularFireModule } from '@angular/fire/compat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarUsuario : FormGroup;

  constructor(private fb: FormBuilder, private afAuth : AngularFireAuth) {
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }



  ngOnInit(): void {
  }

  registrar(){

    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    this.afAuth.createUserWithEmailAndPassword(email , password).then((user) => {
        console.log(user);
      }).catch((error) => {
      console.log(error);

    })
  }

}
