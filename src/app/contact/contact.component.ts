import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const counter3 = document.querySelector<HTMLElement>(".counter-3")!;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j.toString();
          counter3.appendChild(div);
        }
      }

      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);

      function animate(counter: HTMLElement, duration: number, delay: number = 0) {
        const numHeight = counter.querySelector<HTMLElement>(".num")!.clientHeight;
        const totalDistance = (counter.querySelectorAll<HTMLElement>(".num").length - 1) * numHeight;

        gsap.to(counter, {
          y: -totalDistance,
          duration: duration,
          delay: delay,
          ease: "power2.inOut",
          onComplete: () => {
            // Check if the current number is greater than or equal to 100
            const currentNumber = parseInt(counter.querySelector(".num:last-child")!.textContent!);
            if (currentNumber >= 100) {
              gsap.killTweensOf(counter); // Stop the animation
            }
          }
        });
      }

      animate(counter3, 5);
      animate(document.querySelector<HTMLElement>(".counter-2")!, 6);
      animate(document.querySelector<HTMLElement>(".counter-1")!, 2, 4);
    });

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

    gsap.to("h1", 1.5, {
      delay: 7,
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  }
}
