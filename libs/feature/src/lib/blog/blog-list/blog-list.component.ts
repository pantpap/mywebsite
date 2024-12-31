import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';

@Component({
  selector: 'lib-blog-list',
  imports: [CommonModule, Card, Button],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {}
