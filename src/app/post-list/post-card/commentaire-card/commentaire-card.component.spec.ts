import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireCardComponent } from './commentaire-card.component';

describe('CommentaireCardComponent', () => {
  let component: CommentaireCardComponent;
  let fixture: ComponentFixture<CommentaireCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
