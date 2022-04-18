import { Location } from '@angular/common';
import { GetFlowersService } from './../../core/components/services/get-flowers.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  gestionForm!: FormGroup;
  submmited: boolean = false;
  id: any = this.flowerService.data._id;

  createdFlower: any;
  constructor(
    private formBuilder: FormBuilder,
    private flowerService: GetFlowersService, private location: Location
  ) {
    this.gestionForm = this.formBuilder.group({
      name: [
        this.flowerService.data.name,
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(4),
        ],
      ],
      image: [this.flowerService.data.image, [Validators.required]],
      origin: [this.flowerService.data.origin],
    });
  }
  onSubmit() {
    this.submmited = true;
    console.log(this.gestionForm);
    console.log(this.gestionForm.value);

    if (this.gestionForm.valid) {
      const newFlower: any = {
        name: this.gestionForm.get('name')?.value,
        image: this.gestionForm.get('image')?.value,
        origin: this.gestionForm.get('origin')?.value,
      };
      console.log('Este sería el nuevo producto: ', newFlower);
      this.createdFlower = newFlower;
      console.log(newFlower);
      if (this.flowerService.data._id === undefined){
        this.flowerService.postFlowers(newFlower).subscribe();
      }else{
        this.flowerService.putFlowerbyId(this.id, newFlower).subscribe();
      }

    }
  }
  ngOnInit(): void {
    this.gestionForm.valueChanges.subscribe((changes) => {
      this.createdFlower = changes;
      console.log(this.createdFlower);
    });
  }
  onGoBack(): void{
    this.location.back();
   }
}
