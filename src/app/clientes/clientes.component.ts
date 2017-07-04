import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {'has-danger': this.verificaValidTouched(campo)};
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados,form));

      }
    }
  }

  populaDadosForm(dados, formulario) {
     formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        numero:"" ,
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: null,
        numero: null,
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        uf: null
      }
    });
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
