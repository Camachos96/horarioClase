import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioGridPage } from './horario-grid.page';

describe('HorarioGridPage', () => {
  let component: HorarioGridPage;
  let fixture: ComponentFixture<HorarioGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioGridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
