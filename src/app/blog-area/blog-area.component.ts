import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent {

  post : any = [{
    imageUrl : "../../assets/modiji.png" ,
    category: "politics",
    title: "who will 2024",
    excerpt: "lorem ipsur",
    author : "Pratik" 
  },{
  imageUrl : "../../assets/modiji.png" ,
  category: "politics",
  title: "who will 2024",
  excerpt: "lorem ipsur",
  author : "Pratik"} 
]

}
