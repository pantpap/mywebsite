import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { Avatar } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'lib-header',
  imports: [CommonModule, Button, Drawer, Avatar, StyleClass, Ripple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible = false;
}

