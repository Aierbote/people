import { Injectable } from '@angular/core';

/* Servizio di prova scritto a manina */

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  skykids = [
    {
      name: 'Pane',
      cape: 'brown',
      hair: 'moth',
      isOnline: false,
      height: '5',
      capeUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Cape-Brown_Default.png/',
      hairUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/47/Icon_hair_default.png/',
    },
    {
      name: 'Limone',
      cape: 'yellow',
      hair: 'ponytail',
      isOnline: true,
      height: '5',
      capeUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2a/Cape-Yellow.png/',
      hairUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0c/UsheringStargazer-2.png/',
    },
    {
      name: 'Tomato',
      cape: 'red',
      hair: 'mohawk',
      isOnline: true,
      height: '6',
      capeUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/51/Cape-Red.png/',
      hairUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7e/PointingCandlemaker-2.png/',
    },
    {
      name: 'Mandarin',
      cape: 'orange',
      hair: 'cat hears',
      isOnline: false,
      height: '3',
      capeUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/94/Cape-Orange.png/',
      hairUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6a/Days-of-Mischief-Cat-Hair-Icon-Morybel-0146.png/',
    },
    {
      name: 'Fico',
      cape: 'green',
      hair: 'kakashi',
      isOnline: true,
      height: '10',
      capeUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/78/Season_of_little_prince_cape5.PNG/',
      hairUrl:
        'https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Icon_hair_elder_valley_1.png/',
    },
  ];

  appearence: any;
  defaultStyle = { cape: ' brown', hair: 'moth', isOnline: false, height: '5' };
  myStyle = {
    cape: 'orange_chill',
    hair: 'broom',
    isOnline: true,
    height: '9',
  };

  constructor() {}

  login() {
    this.appearence = this.defaultStyle;
    setTimeout(() => (this.appearence = this.myStyle), 5000);
  }

  getOnlineFriends() {
    return this.skykids;
  }
}
