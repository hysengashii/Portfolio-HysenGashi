import { Component, OnInit, Renderer2} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private currentZoomedElement: HTMLElement | null = null;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.animateWithGSAP();
  }

  animateWithGSAP(): void {
    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
      width: 0,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: "power2.inOut"
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });

    gsap.to("h1", {
      delay: 7,
      duration: 1.5,
      y: "100%",
      ease: "power4.inOut",
    });
  }



  onImageClick(event: Event): void {
    const element = event.target as HTMLElement;
    if (this.currentZoomedElement && this.currentZoomedElement !== element) {
      this.renderer.removeClass(this.currentZoomedElement, 'zoomed');
    }

    if (element.classList.contains('zoomed')) {
      this.renderer.removeClass(element, 'zoomed');
      this.currentZoomedElement = null;
    } else {
      this.renderer.addClass(element, 'zoomed');
      this.currentZoomedElement = element;
    }
  }
}
