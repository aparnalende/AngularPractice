import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/uploadservices/upload-file.service';

@Component({
  selector: 'app-uload-files',
  templateUrl: './uload-files.component.html',
  styleUrls: ['./uload-files.component.css'],
})
export class UloadFilesComponent implements OnInit {
  selectedFiles: FileList | any;
  currentFile: File | any;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = 'could not upload the file!';
        this.currentFile = undefined;
      }
    );
    this.selectedFiles = undefined;
  }
}
