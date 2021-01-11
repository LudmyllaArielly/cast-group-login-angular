import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }
  // vai interceptar a requisição e verificar se existe o token, se sim vai adicionar ao cabecalho
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(sessionStorage.getItem("token") != null){
      const token = 'Bearer ' + sessionStorage.getItem("token");
      const tokenHeader = req.clone({
        headers: req.headers.set("Authorization", token)
      });

      return next.handle(tokenHeader);
    }else{
      return next.handle(req);
    }
  }
}
// transformando em modulo
@NgModule({
  providers: [{
  provide : HTTP_INTERCEPTORS,
  useClass: HeaderInterceptorService,
  multi: true,
  },
],
})

export class HttpInterceptorModule{
  
}