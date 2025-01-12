import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@my-website/header';
import { SocialMediaComponent } from '@my-website/social-media';

@Component({
  imports: [RouterModule, HeaderComponent, SocialMediaComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Pantelis Papasavvas';
}
