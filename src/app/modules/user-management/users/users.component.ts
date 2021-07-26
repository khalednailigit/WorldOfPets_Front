// tslint:disable:no-string-literal
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { usersService } from '../_services';
import {
  GroupingState,
  PaginatorState,
  SortState,
  IFilterView,
} from '../../../_metronic/shared/crud-table';
import { UserService } from '../_services/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements
OnInit,
OnDestroy,
IFilterView {
paginator: PaginatorState;
sorting: SortState;
grouping: GroupingState;
isLoading: boolean;
filterGroup: FormGroup;
searchGroup: FormGroup;
private subscriptions: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

constructor(
  private fb: FormBuilder,
  private modalService: NgbModal,
  public userService: UserService,
  private _cdr: ChangeDetectorRef, 
) { }
items;
// angular lifecircle hooks
ngOnInit(): void {
  this.filterForm();
 
  this.get();
}
get(){
  this.userService.getAll().subscribe(res =>{
    console.log(res);
    this.items=res;
    this.changeStatus();
  })
}
ngOnDestroy() {
  this.subscriptions.forEach((sb) => sb.unsubscribe());
}

// filtration
filterForm() {
  this.filterGroup = this.fb.group({
    status: [''],
    condition: [''],
    searchTerm: [''],
  });
  this.subscriptions.push(
    this.filterGroup.controls.status.valueChanges.subscribe(() =>
      this.filter()
    )
  );
  this.subscriptions.push(
    this.filterGroup.controls.condition.valueChanges.subscribe(() => this.filter())
  );
}
changeStatus(): void {

  setTimeout(() => {

    this._cdr.detectChanges()
    this._cdr.markForCheck()

  }, 500);
}
filter() {
  const filter = {};
  const status = this.filterGroup.get('status').value;
  if (status) {
    filter['status'] = status;
  }

  const condition = this.filterGroup.get('condition').value;
  if (condition) {
    filter['condition'] = condition;
  }
  // this.usersService.patchState({ filter });
}





// sorting
sort(column: string) {
  const sorting = this.sorting;
  const isActiveColumn = sorting.column === column;
  if (!isActiveColumn) {
    sorting.column = column;
    sorting.direction = 'asc';
  } else {
    sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
  }
  // this.usersService.patchState({ sorting });
}

// actions
delete(id: number) {
  const modalRef = this.modalService.open(DeleteUserComponent);
  modalRef.componentInstance.id = id;
  modalRef.result.then(
    () => this.get(),
    () => { }
  );
}


}
