/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('App: Tmp', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:        [HttpModule, RouterTestingModule],
            declarations:   [AppComponent],
            providers:      [],

            schemas:        [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture     = TestBed.createComponent(AppComponent);
        component   = fixture.debugElement.componentInstance;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });
});
