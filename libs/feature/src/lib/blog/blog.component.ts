import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'lib-blog',
  imports: [CommonModule, BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {}
