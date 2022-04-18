import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetFlowersService {
  constructor(private http: HttpClient) {}

  data: any ={

    name:
      '',
    image: '',
    origin: '',


  };
  getFlowers() {
    return this.http.get('http://localhost:5000/flowers');
  }

  postFlowers(createdFlower: any) {
    return this.http.post(
      'http://localhost:5000/flowers/newFlower',
      createdFlower
    );
  }

  getFlowerbyId(id: any) {
    return this.http.get(`http://localhost:5000/flowers/${id}`); //templete para usar var
  }


  updateInfo(item: any){
    this.data = item;
    console.log(this.data);

  }

  putFlowerbyId(id: any, flowerUpdate: any) {
    return this.http.put(`http://localhost:5000/flowers/${id}`, flowerUpdate); //templete para usar var
  }

  findByIdAndDelete(id: any) {
    return this.http.delete(`http://localhost:5000/flowers/${id}`); //templete para usar var
  }
}
