import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  slidesStore:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
   this.slidesStore=
    [{
      src:"https://www.istockphoto.com/photo/shot-of-a-diverse-group-of-children-huddled-together-and-colouring-in-their-gm1339040592-419472016?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstudent&utm_term=student%3A%3A%3A"

    },
    {
      src:"https://www.istockphoto.com/photo/multi-ethnic-group-of-latin-american-college-students-smiling-gm1349297974-425961880?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstudent&utm_term=student%3A%3A%3A"

    },
    
  ]
    console.log(this.slidesStore);
  }
  
  

}
