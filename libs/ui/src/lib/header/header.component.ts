import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { Avatar } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Ripple } from 'primeng/ripple';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [
    CommonModule,
    Button,
    Drawer,
    Avatar,
    Ripple,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeDrawer(e: Event): void {
    this.drawerRef.close(e);
  }

  visible = false;
}

