import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.defaults({
      toggleActions: "play none none reverse"
    });

    gsap.to('.img-container', {
      scale: 52,
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true
      }
    });

    gsap.to('.right', {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });

    gsap.to('.left', {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });


    gsap.to('.txt-bottom', {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: 2
      }
    });


    const tl = gsap.timeline();
    tl.from('.left-side div', {
      y: 150,
      opacity: 0,
      stagger: {
        amount: 0.4
      },
      delay: .5
    }).from('.right-side', {
      opacity: 0,
      duration: 2
    }, .5).to('.wrapper', {
      x: -window.innerWidth
    });


    ScrollTrigger.create({
      animation: tl,
      trigger: '.wrapper',
      start: "top top",
      end: "+=600",
      scrub: 1,
      pin: true
    });


    const tabletMediaQuery = window.matchMedia('(max-width: 900px)');


    if (tabletMediaQuery.matches) {

      tl.to('.wrapper', {
        x: -window.innerWidth / 2
      });
    }


    const colElements = gsap.utils.toArray('.col') as HTMLElement[];
    colElements.forEach((image: HTMLElement) => {
      gsap.fromTo(image, {
        opacity: .3,
        x: 100
      }, {
        opacity: 1,
        x: -50,
        scrollTrigger: {
          trigger: image,
          start: "10%",
          scrub: 2
        }
      });
    });

    const timeline = gsap.timeline();
    timeline.from('.title span', {
      y: 150,
      skewY: 7,
      duration: 3
    }).from('.txt-bottom', {
      letterSpacing: -10,
      opacity: 0,
      duration: 3
    });
  }
}
