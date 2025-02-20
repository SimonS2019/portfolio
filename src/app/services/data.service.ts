import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private basicInfoUrl = 'assets/data/basicInfo.json';
  private skillsUrl = 'assets/data/skills.json';
  private projectsUrl = 'assets/data/projects.json';
  private referencesUrl = 'assets/data/references.json';

  constructor(private http: HttpClient) {}

  getBasicInfo(): Observable<any> {
    return this.http.get<any>(this.basicInfoUrl);
  }

  getSkills(): Observable<any> {
    return this.http.get<any>(this.skillsUrl);
  }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.projectsUrl);
  }

  getReferences(): Observable<any> {
    return this.http.get<any>(this.referencesUrl);
  }
}
