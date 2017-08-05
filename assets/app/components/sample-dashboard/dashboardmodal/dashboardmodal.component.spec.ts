/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {CoreModule} from "../../../core/core.module";
import {DashboardModalComponent} from "./dashboardmodal.component";

describe('DashboardModalComponent', () => {
    let component: DashboardModalComponent;
    let fixture: ComponentFixture<DashboardModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardModalComponent
            ],
            imports: [
                CoreModule,
                RouterTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
