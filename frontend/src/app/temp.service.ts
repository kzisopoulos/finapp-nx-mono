import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  httpClient = inject(HttpClient);

  getMessage(): Observable<string> {
    return this.httpClient
      .get<{ message: string }>('/api')
      .pipe(map((res) => res.message));
  }
}
