import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from './api.service';
import { finalize } from 'rxjs';

export const loaderLogicInterceptor: HttpInterceptorFn = (req, next) => {
  const loading = inject(ApiService)

  loading.startLoading()
  
  return next(req).pipe(
    finalize( () => {
      loading.stopLoading()
    } )
  );
};
