import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor() {}

  client: HttpClient
}
