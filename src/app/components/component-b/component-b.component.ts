import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states';
import { Observable } from 'rxjs';
import { variableASelector, variableBSelector } from 'src/app/store/selectors/store.selector';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Change } from 'src/app/store/actions/featurea.action';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  variableA$: Observable<number>;
  variableB$: Observable<number>;

  timeout: any;

  constructor(private store: Store<AppState>) { 
    this.variableA$ = this.store.select(variableASelector);
    this.variableB$ = this.store.select(variableBSelector);
  }

  ngOnInit() {
  }

  onStart(){
    this.start();
  }

  start(){

    this.timeout = setTimeout(() => { 
      this.store.dispatch(new Change());
      this.start();
    }, 1000);
  }

  onStop(){
    if(this.timeout){
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}
