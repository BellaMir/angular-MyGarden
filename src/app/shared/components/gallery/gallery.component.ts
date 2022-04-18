import { ActivatedRoute } from '@angular/router';
import { GetFlowersService } from './../../../core/components/services/get-flowers.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  filterpost = '';
  @Input() flowers: any;
  public flower: any;

  constructor(
    private route: ActivatedRoute,
    private getFlowersService: GetFlowersService,
    private params: ActivatedRoute) {}
  ngOnInit(): void {}

    }


