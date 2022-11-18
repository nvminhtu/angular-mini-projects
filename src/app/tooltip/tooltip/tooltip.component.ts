import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  // Attributes
  @Input() showTooltip?: boolean = true;
  @Input() topPosition = 215;
  @Input() leftPosition = 400;

  // Data
  @Input() tooltipText?: string = 'Default tooltip text';

  constructor() {}

  ngOnInit(): void {}
}
