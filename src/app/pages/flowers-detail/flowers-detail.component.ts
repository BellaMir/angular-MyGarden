import { GetFlowersService } from './../../core/components/services/get-flowers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flowers-detail',
  templateUrl: './flowers-detail.component.html',
  styleUrls: ['./flowers-detail.component.scss'],
})
export class FlowersDetailComponent implements OnInit {
  //cflower$!: Observable<Flowers>;
  public flower: any;
  dbflowersFind: any;

  constructor(
    private route: ActivatedRoute,
    private getFlowersService: GetFlowersService,
    private router: Router, private location: Location
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params['flowerID']; //este id es el mismo que he puesto en el router de ángular
      this.flower = this.getFlowersService
        .getFlowerbyId(id)
        .subscribe((res: any) => {
          this.dbflowersFind = res;
          this.flower = this.dbflowersFind;
        });
    });
  }
  onUpdate(item: any) {
    this.getFlowersService.updateInfo(item);
    this.router.navigate(['/about']);
  }
  onDelete() {
    this.route.params.subscribe((params: any) => {
      const id = params['flowerID'];
      this.flower = this.getFlowersService
        .findByIdAndDelete(id)
        .subscribe((res: any) => {
          this.dbflowersFind = res;
          this.flower = this.dbflowersFind;
        });
    });
  }
  onGoBack(): void{
    this.location.back();
   }

}
