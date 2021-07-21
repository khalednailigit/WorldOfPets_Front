// tslint:disable:no-string-literal
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ProductsService } from '../_services';
import {
  GroupingState,
  PaginatorState,
  SortState,
  IDeleteAction,
  IDeleteSelectedAction,
  IFetchSelectedAction,
  IUpdateStatusForSelectedAction,
  ISortView,
  IFilterView,
  IGroupingView,
  ISearchView,
} from '../../../_metronic/shared/crud-table';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements
OnInit,
OnDestroy,
// IDeleteAction,
// IDeleteSelectedAction,
// IFetchSelectedAction,
// IUpdateStatusForSelectedAction,
// ISortView,
// IFilterView,
// IGroupingView,
// ISearchView,
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
  // public productsService: ProductsService
) { }

// angular lifecircle hooks
ngOnInit(): void {
  this.filterForm();
  // this.productsService.fetch();
  // const sb = this.productsService.isLoading$.subscribe(res => this.isLoading = res);
  // this.subscriptions.push(sb);
  // this.grouping = this.productsService.grouping;
  // this.paginator = this.productsService.paginator;
  // this.sorting = this.productsService.sorting;
  // this.productsService.fetch();
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
  // this.productsService.patchState({ filter });
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
  // this.productsService.patchState({ sorting });
}

// actions
// delete(id: number) {
//   const modalRef = this.modalService.open(DeleteProductModalComponent);
//   modalRef.componentInstance.id = id;
//   modalRef.result.then(
//     () => this.productsService.fetch(),
//     () => { }
//   );
// }

// deleteSelected() {
//   const modalRef = this.modalService.open(DeleteProductsModalComponent);
//   modalRef.componentInstance.ids = this.grouping.getSelectedRows();
//   modalRef.result.then(
//     () => this.productsService.fetch(),
//     () => { }
//   );
// }

// updateStatusForSelected() {
//   const modalRef = this.modalService.open(
//     UpdateProductsStatusModalComponent
//   );
//   modalRef.componentInstance.ids = this.grouping.getSelectedRows();
//   modalRef.result.then(
//     () => this.productsService.fetch(),
//     () => { }
//   );
// }

// fetchSelected() {
//   const modalRef = this.modalService.open(FetchProductsModalComponent);
//   modalRef.componentInstance.ids = this.grouping.getSelectedRows();
//   modalRef.result.then(
//     () => this.productsService.fetch(),
//     () => { }
//   );
// }
}
