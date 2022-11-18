import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-list-view',
  templateUrl: './tooltip-list-view.component.html',
  styleUrls: ['./tooltip-list-view.component.scss'],
})
export class TooltipListViewComponent implements OnInit {
  reactors = [
    { name: 'Pressurized Water Reactor (PWR)' },
    { name: 'Boiling Water Reactor (BWR)' },
    { name: 'Advanced Gas-Cooled Reactor (AGR)' },
    { name: 'Light Water Graphite-Moderated Reactor (LWGR)' },
    { name: 'Fast Neutron Reactor (FNR)' },
    { name: 'Operable Nuclear Power Plants' },
  ];

  showTooltip = false;
  tooltipText?: string = 'This is default parent component text';
  topPosition: any;
  leftPosition: any;

  // Methods
  onHover(tooltipText: string, e: MouseEvent) {
    this.showTooltip = true;
    this.tooltipText = tooltipText;
    this.topPosition = e.clientY;
    this.leftPosition = e.clientX;
  }

  onMouseout() {
    this.showTooltip = false;
    this.tooltipText = '';
    this.topPosition = null!;
    this.leftPosition = null!;
  }

  constructor() {}

  ngOnInit(): void {}
}
