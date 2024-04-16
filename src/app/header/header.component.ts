import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateLogo();
  }

  animateLogo(): void {
    const logo = document.querySelector('.logo');
    let rotation = 0;

    // Function to rotate the logo
    const rotateLogo = () => {
      rotation += 360; // Increment rotation by 360 degrees
      gsap.to(logo, { duration: 1, rotation: rotation });
    };

    // Rotate the logo initially
    rotateLogo();

    // Rotate the logo every 5 seconds
    setInterval(() => {
      rotateLogo();
    }, 5002);

    document.querySelectorAll('.menu li').forEach((liElement) => {
      liElement.addEventListener('click', () => {
        // Toggle a class to rotate the clicked li element
        liElement.classList.toggle('clicked');
      });
    });
  }
}
