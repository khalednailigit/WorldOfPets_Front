import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, switchMap, tap, first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {
  id: number;
  user: any;
  formGroup: FormGroup;
  isLoading$: Observable<boolean>;
  errorMessage = '';

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.loaduser();
  }

  loaduser() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      });

    if (!this.id) {
       this.user = {
        id: undefined,
        email: '',
        password: '',
        nom: '',
        prenom: '',
        sexe: '',
        login: '',
      };;
      this.loadForm();
    } else {
      const sb = this.userService.getItemById(this.id).pipe(
        first(),
        catchError((errorMessage) => {
          return of(
            {
              id: undefined,
              email: '',
              password: '',
              operator_id: '',
              role: '',
              is_notify: false,
              first_name: '',
              last_name: '',
              note: ''
            }
          );
        })
      ).subscribe((user) => {
        console.log(user);
        this.changeStatus();
        this.user = user;
        this.loadForm();
      });

      this.subscriptions.push(sb);
    }
  }
  changeStatus(): void {


    setTimeout(() => {

      this._cdr.detectChanges()
      this._cdr.markForCheck()

    }, 500);
  }
  loadForm() {
    if (!this.user) {
      return;
    }

    this.formGroup = this.fb.group({
      password: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])],
      nom: [this.user.nom, Validators.compose([Validators.required])],
      login: [this.user.login],
      email: [this.user.email, Validators.compose([Validators.email,
      Validators.minLength(3),
      Validators.maxLength(320)])],
      sexe: [this.user.sexe, Validators.compose([Validators.required])],
      prenom: [this.user.prenom, Validators.compose([Validators.required])],

    });
  }


  save() {
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }

    const formValues = this.formGroup.value;
    this.user = Object.assign(this.user, formValues);
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.userService.update(this.user).pipe(
      tap(() => this.router.navigate(['/user-management/users'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.user);
      })
    ).subscribe(res => this.user = res);
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.userService.create(this.user).pipe(
      tap(() => this.router.navigate(['/user-management/users'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.user);
      })
    ).subscribe(res => this.user = res as any);
    this.subscriptions.push(sbCreate);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation: string, controlName: string) {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
