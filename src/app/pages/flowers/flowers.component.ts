import { GetFlowersService } from './../../core/components/services/get-flowers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  public flowers: any =[];


  constructor(private getflowersService: GetFlowersService) { }

  ngOnInit(): void {
      this.getflowersService.getFlowers().subscribe((res: any) =>{
      console.log(res);
      this.flowers = res;
     })


  }

}
