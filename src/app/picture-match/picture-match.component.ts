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

  oneName: [string, string] = ['', ''];
  twoName: [string, string] = ['', ''];
  threeName: [string, string] = ['', ''];
  fourName: [string, string] = ['', ''];
  fiveName: [string, string] = ['', ''];
  sixName: [string, string] = ['', ''];
  sevenName: [string, string] = ['', ''];
  eightName: [string, string] = ['', ''];
  nineName: [string, string] = ['', ''];
  tenName: [string, string] = ['', ''];
  elevenName: [string, string] = ['', ''];
  twelveName: [string, string] = ['', ''];
  thirteenName: [string, string] = ['', ''];
  fourteenName: [string, string] = ['', ''];
  fifteenName: [string, string] = ['', ''];
  sixteenName: [string, string] = ['', ''];

  pictures = [
    [
      'monkey',
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/811yZ+JgsiL._SL1500_.jpg',
    ],
    [
      'chicken',
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gMWT31mfL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    ],
    [
      'cat',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/10/Digital-artist-creates-cute-animals-with-clothes-and-its-hard-not-to-fall-in-love-with-them-74-Pics-634d0cc5812fa__700.jpg',
    ],
    [
      'dino',
      'https://as1.ftcdn.net/v2/jpg/05/77/77/06/1000_F_577770636_BOelNtwZN0BaQ63fxOzAAjkCI4evbF4K.jpg',
    ],
    [
      'dog2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9c1VDWltgTtobjeUoieGTQ9pBj0v2QblnAYwmZlEGsvHQPCAKZgpgEtuMycchgyyWsU&usqp=CAU',
    ],
    [
      'goat',
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybl8zZF9pbGx1c3RyYXRpb25fY2FydG9vbl9vZl9nb3JhbF9jYXJ0b29uX2FuaW1hdGlvbl82OTU2YjVjNC1jNWYwLTRlMjQtYjNmZC1hNDkyOThlMmY3MzBfMS5wbmc.png',
    ],
    [
      'donkey',
      'https://as2.ftcdn.net/v2/jpg/05/68/51/19/1000_F_568511904_Yorz32r7YhZfTOzyb4hYLK2G9UtPvRPO.jpg',
    ],
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

    this.assignImages();
  }

  assignImages() {
    this.oneName = [
      this.pictures[parseInt(this.one) - 1][0],
      this.pictures[parseInt(this.one) - 1][1],
    ];

    this.twoName = [
      this.pictures[parseInt(this.two) - 1][0],
      this.pictures[parseInt(this.two) - 1][1],
    ];

    this.threeName = [
      this.pictures[parseInt(this.three) - 1][0],
      this.pictures[parseInt(this.three) - 1][1],
    ];

    this.fourName = [
      this.pictures[parseInt(this.four) - 1][0],
      this.pictures[parseInt(this.four) - 1][1],
    ];

    this.fiveName = [
      this.pictures[parseInt(this.five) - 1][0],
      this.pictures[parseInt(this.five) - 1][1],
    ];

    this.sixName = [
      this.pictures[parseInt(this.six) - 1][0],
      this.pictures[parseInt(this.six) - 1][1],
    ];

    this.sevenName = [
      this.pictures[parseInt(this.seven) - 1][0],
      this.pictures[parseInt(this.seven) - 1][1],
    ];

    this.eightName = [
      this.pictures[parseInt(this.eight) - 1][0],
      this.pictures[parseInt(this.eight) - 1][1],
    ];

    this.nineName = [
      this.pictures[parseInt(this.nine) - 1][0],
      this.pictures[parseInt(this.nine) - 1][1],
    ];

    this.tenName = [
      this.pictures[parseInt(this.ten) - 1][0],
      this.pictures[parseInt(this.ten) - 1][1],
    ];

    this.elevenName = [
      this.pictures[parseInt(this.eleven) - 1][0],
      this.pictures[parseInt(this.eleven) - 1][1],
    ];

    this.twelveName = [
      this.pictures[parseInt(this.twelve) - 1][0],
      this.pictures[parseInt(this.twelve) - 1][1],
    ];

    this.thirteenName = [
      this.pictures[parseInt(this.thirteen) - 1][0],
      this.pictures[parseInt(this.thirteen) - 1][1],
    ];

    this.fourteenName = [
      this.pictures[parseInt(this.fourteen) - 1][0],
      this.pictures[parseInt(this.fourteen) - 1][1],
    ];

    this.fifteenName = [
      this.pictures[parseInt(this.fifteen) - 1][0],
      this.pictures[parseInt(this.fifteen) - 1][1],
    ];

    this.sixteenName = [
      this.pictures[parseInt(this.sixteen) - 1][0],
      this.pictures[parseInt(this.sixteen) - 1][1],
    ];
  }
}
