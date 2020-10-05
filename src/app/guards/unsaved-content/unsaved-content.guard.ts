import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {QuillEditorComponent} from '../../modules/features/content-management/component/quill-editor/quill-editor.component';

@Injectable({
    providedIn: 'root'
})
export class UnsavedContentGuard implements CanDeactivate<QuillEditorComponent> {
    canDeactivate(component: QuillEditorComponent, currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
        UrlTree> | boolean | UrlTree {
        return true;
    }
}
