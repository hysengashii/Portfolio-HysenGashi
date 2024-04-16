import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Wrap every letter in a span
    const textWrapper = document.querySelector(".title") as HTMLElement | null;
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // GSAP animation for text letters
      gsap.from(
        ".title .letter",
        {
          y: -200,
          ease: 'expo.out',
          duration: 1.5, // Slower duration
          delay: 7, // Delayed start
          stagger: 0.05, // Slower stagger
        },
      );

      // GSAP animations for other elements
      gsap.from(
        ".container > .block",
        {
          y: "110%",
          ease: 'expo.inOut',
          duration: 3, // Slower duration
          delay: 0, // Delayed start
          stagger: 0.6, // Slower stagger
        },
      );
      gsap.to(".overlay", {
        y: "100%",
        ease: 'expo.inOut',
        duration: 1, // Slower duration
        delay: 6, // Delayed start
      });

      gsap.to(".container", {
        scale: 1,
        y: "-400%",
        ease: 'expo.inOut',
        duration: 3, // Slower duration
        delay: 6.5, // Delayed start
      });

      gsap.from(
        ".navbar > div, .title",
        {
          opacity: 0,
          y: -100,
          ease: 'expo.inOut',
          duration: 2, // Slower duration
          delay: 7, // Delayed start
          stagger: 0.1, // Slower stagger
        },
      );
    }
  }
}
