import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  constructor(private dataService: DataService) { }

  postWithFile(url: string, postData: any, files: File[]) {
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();
    formData.append('uploads', files[0], files[0].name);
    if (postData !== '' && postData !== undefined && postData !== null) {
      // tslint:disable-next-line:prefer-const
      for (let property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
        }
      }
    }
    return new Promise((resolve, reject) => {
      this.dataService.postFile(url, formData)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    })

  }

}
