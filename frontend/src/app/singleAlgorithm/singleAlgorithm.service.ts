import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Toast from '../common/toast';
import { successful } from '../common/response';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SingleAlgorithmService {

    constructor(private $http: Http) { }

    private handleError(error: any) {
         Toast.showErrorToast(Toast.serverNotRespone);
   }

    getAlgorithm(slug: string) {
        return this.$http.get(`http://api.room4323.study/api/article/${slug}/get`)
                        .toPromise()
                        .then(
                            response => {
                                if (response.json().status !== successful) {
                                    Toast.showErrorToast(Toast.serverNotRespone);
                                } else {
                                    return response.json().article;
                                }
                            })
                        .catch(this.handleError);
    }

}
