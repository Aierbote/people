import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  logoITS: string = '../../../assets/img/logo-sja-3.png';

  logoITS_hover: string = '../../../assets/img/logo-sja-4.png'; // logo-sja-3 ma a colori "scambiati"

  /**
   * Per cambiare il path src del logo in caso di `:hover`, o meglio in caso di eventi `mouseover`, `mouseleft` di Angular
   * @param isHovered : boolean, `true` per `mouseover`, `false` per `mouseleft` di Angular
   */
  itsHover(isHovered: boolean) {
    this.logoITS = isHovered
      ? this.logoITS_hover
      : '../../../assets/img/logo-sja-3.png';

    // DEBUG :
    console.log('ITS Hover, Anakin');
  }
}
