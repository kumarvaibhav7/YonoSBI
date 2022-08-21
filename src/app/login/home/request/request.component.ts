import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor(public route:ActivatedRoute,private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(this.document.body, 'overflow-y');
  }

}
