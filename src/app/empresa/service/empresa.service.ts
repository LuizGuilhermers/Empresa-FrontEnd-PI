import { Injectable } from '@angular/core';
import { Iempresa } from './iempresa';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
   // o readonly serve para dizer que a variável não pode ser alterada
  // A variável API está fazedo a conexão com o backend
  private readonly  API ="http://localhost:3000/empresa";

  constructor(private http: HttpClient) { }

  listar(){
    // O atributo <Icursos[]> serve para parametrizar o retorno da classe
    return this.http.get<Iempresa[]>(this.API);
  }


  listarPorId(id:object) {
    return this.http.get<Iempresa>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(empresa:object) {
    // o pipe take 1 serve para ir apenas umas vez no servidor e voltar.
    return this.http.post(this.API, empresa).pipe(take(1));
  }

  atualizar(empresa:any){
    return this.http.put(`${this.API}/${empresa.id}`, empresa).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  
}