import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.animateLogo();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  animateLogo(): void {
    const logo = document.querySelector('.logo');
    let rotation = 0;


    const rotateLogo = () => {
      rotation += 360;
      gsap.to(logo, { duration: 1, rotation: rotation });
    };

    rotateLogo();

    setInterval(() => {
      rotateLogo();
    }, 5002);

    document.querySelectorAll('.menu li').forEach((liElement) => {
      liElement.addEventListener('click', () => {
        liElement.classList.toggle('clicked');
      });
    });
  }
}
