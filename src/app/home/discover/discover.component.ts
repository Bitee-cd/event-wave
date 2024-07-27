import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
})
export class DiscoverComponent {
  discoverItems = [
    {
      title: 'Easy Registration',
      text: '   Register for events hassle-free and save time with our streamlined registration process.',
    },
    {
      title: 'Networking Opportunities',
      text: '  Connect with like-minded individuals and expand your professional network at events.',
    },
    {
      title: ' Event Discovery',
      text: '  Explore a wide range of events and find the perfect ones to attend.',
    },
    {
      title: 'Easy Event Creation',
      text: ' Create and manage your own events effortlessly with our intuitive event creation tool.',
    },
  ];
  faqs = [
    {
      question: 'How do I register?',
      answer:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',
    },
    {
      question: 'How do I join an event?  ',
      answer:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',
    },
    {
      question: 'How can I create an event?',
      answer:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',
    },
    {
      question: 'Can I cancel my registration?',
      answer:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',
    },
    {
      question: 'How do I manage my events?',
      answer:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?',
    },
  ];
  expandedIndex = 0;
}
