import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // per il banner/logo della Steve Jobs Academy
  logoITS: string = '../../../assets/img/logo-sja-3.png';
  logoITS_hover: string = '../../../assets/img/logo-sja-4.png'; // logo-sja-3 ma a colori "scambiati"
  theirLogo!: string;

  // per il logo GitHube/la profile picture mia
  logoGitHub: string = 'https://pngimg.com/uploads/github/github_PNG91.png';
  pfpAlberto: string = '../../../assets/img/alberto.jpg';
  myLogo!: string;

  ngOnInit(): void {
    // copia iniziale per il loro logo
    this.theirLogo = this.logoITS.slice();

    // copia iniziale per il logo github
    this.myLogo = this.logoGitHub.slice();
  }

  /**
   * Per cambiare il path src del logo in caso di `:hover`, o meglio in caso di eventi `mouseover`, `mouseleft` di Angular
   * @param isHovered : boolean, `true` per `mouseover`, `false` per `mouseleft` di Angular
   */
  itsHover(isHovered: boolean) {
    this.theirLogo = isHovered ? this.logoITS_hover : this.logoITS;

    // DEBUG :
    console.log('ITS Hover, Anakin');
  }

  pfpHover(isHovered: boolean) {
    this.myLogo = isHovered ? this.pfpAlberto : this.logoGitHub;
  }
}
