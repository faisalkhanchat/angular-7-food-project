import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../../../environments/environment';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn:'root'
})
export class FileUploadService {
    bucket: S3;
    constructor(
        private _loaderService:LoaderService
    ) {
        this.bucket = new S3(
            {
                accessKeyId: environment.config.AWS_ACCESS_KEY,
                secretAccessKey: environment.config.AWS_SECRET_KEY,
                region: environment.config.AWS_REGION,
            }
        );
    }
    async uploadFile(fileToUpload: File) {
        try {
            const params = {
                Bucket: environment.config.AWS_BUCKET,
                Key: fileToUpload.name || new Date().getTime() + '.png',
                Body: fileToUpload,
                ACL: 'public-read'
            };
            this._loaderService.loader.next(true);
            return new Promise((resolve, reject) => {
                this.bucket.upload(params, function (err, data) {
                    if (err) {
                        reject(err);
                        this._loaderService.loader.next(false);
                        return false;
                    } else {
                        this._loaderService.loader.next(false);
                        resolve(data);
                    }
                }).on('httpUploadProgress', (progress) => {
                });

            });
        } catch (err) {
            this._loaderService.loader.next(false);
            console.error(err.message);
        }
    }
}
