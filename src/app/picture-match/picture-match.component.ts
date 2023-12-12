import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-match',
  templateUrl: './picture-match.component.html',
  styleUrls: ['./picture-match.component.css'],
})
export class PictureMatchComponent {
  one = '';
  two = '';
  three = '';
  four = '';
  five = '';
  six = '';
  seven = '';
  eight = '';
  nine = '';
  ten = '';
  eleven = '';
  twelve = '';
  thirteen = '';
  fourteen = '';
  fifteen = '';
  sixteen = '';

  pictures = [
    [
      'monkey',
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811yZ+JgsiL._SL1500_.jpg',
    ],
    // [
    //   'monkey2',
    //   'https://i.etsystatic.com/37627904/r/il/53c711/4619377698/il_1588xN.4619377698_oep2.jpg',
    // ],
    // [
    //   'giraffe',
    //   'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41d5O70baoL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    // ],
    // [
    //   'cow',
    //   'https://i.etsystatic.com/42371735/r/il/a6ad93/5112774280/il_1588xN.5112774280_fimr.jpg',
    // ],
    [
      'chicken',
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gMWT31mfL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    ],
    // [
    //   'chicken2',
    //   'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlOF93YXRlcmNvbG9yX2lsbHVzdHJhdGlvbl9vZl9jaGlja2VuX2hvbGRpbmdfc2hvcF9jMTM2NWEwZi0zMGU0LTRkYTQtOGQxNC04ZTA4NzNiNDlmYWFfMS5wbmc.png',
    // ],
    [
      'cat',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/10/Digital-artist-creates-cute-animals-with-clothes-and-its-hard-not-to-fall-in-love-with-them-74-Pics-634d0cc5812fa__700.jpg',
    ],
    // [
    //   'cat2',
    //   'https://png.pngtree.com/png-clipart/20230527/original/pngtree-cat-animal-in-military-dress-is-very-funny-ai-generated-png-image_9171833.png',
    // ],
    [
      'dino',
      'https://as1.ftcdn.net/v2/jpg/05/77/77/06/1000_F_577770636_BOelNtwZN0BaQ63fxOzAAjkCI4evbF4K.jpg',
    ],
    // [
    //   'dog',
    //   'https://cdn.dribbble.com/users/78459/screenshots/3182560/media/66468109898686d73085ecf3f6c2b24d.jpg?resize=400x0',
    // ],
    [
      'dog2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9c1VDWltgTtobjeUoieGTQ9pBj0v2QblnAYwmZlEGsvHQPCAKZgpgEtuMycchgyyWsU&usqp=CAU',
    ],
    // [
    //   'horse',
    //   'https://horsepioneer.com/wp-content/uploads/2023/09/Laughing-horse.jpg',
    // ],
    [
      'goat',
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybl8zZF9pbGx1c3RyYXRpb25fY2FydG9vbl9vZl9nb3JhbF9jYXJ0b29uX2FuaW1hdGlvbl82OTU2YjVjNC1jNWYwLTRlMjQtYjNmZC1hNDkyOThlMmY3MzBfMS5wbmc.png',
    ],
    [
      'donkey',
      'https://as2.ftcdn.net/v2/jpg/05/68/51/19/1000_F_568511904_Yorz32r7YhZfTOzyb4hYLK2G9UtPvRPO.jpg',
    ],
    // [
    //   'bear',
    //   'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/278922117/original/06d592ce0da806abc0fac7bcc479825b91884b0e/generate-cute-cartoon-animals-using-artificial-intelligence.png',
    // ],
    [
      'sloth',
      'https://i.chzbgr.com/full/9758132480/h48A79B46/animal-szzt-wovch-sizza',
    ],
  ];

  constructor() {
    const numbers: number[] = [];

    // Generate an array of numbers from 1 to 8
    for (let i = 1; i <= 8; i++) {
      numbers.push(i);
      numbers.push(i); // Add the same number again to create pairs
    }

    // Shuffle the array to get a random order of numbers
    numbers.sort(() => Math.random() - 0.5);

    // Assign unique numbers from the shuffled array to individual variables
    this.one = numbers.pop()!.toString();
    this.two = numbers.pop()!.toString();
    this.three = numbers.pop()!.toString();
    this.four = numbers.pop()!.toString();
    this.five = numbers.pop()!.toString();
    this.six = numbers.pop()!.toString();
    this.seven = numbers.pop()!.toString();
    this.eight = numbers.pop()!.toString();
    this.nine = numbers.pop()!.toString();
    this.ten = numbers.pop()!.toString();
    this.eleven = numbers.pop()!.toString();
    this.twelve = numbers.pop()!.toString();
    this.thirteen = numbers.pop()!.toString();
    this.fourteen = numbers.pop()!.toString();
    this.fifteen = numbers.pop()!.toString();
    this.sixteen = numbers.pop()!.toString();
    // Assign other variables in a similar manner
  }
}
