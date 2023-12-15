import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-match',
  templateUrl: './picture-match.component.html',
  styleUrls: ['./picture-match.component.css'],
})
export class PictureMatchComponent {
  turn: number = 0;

  chosen: string[] = [];

  completed: string[] = [];

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

  oneName: [string, string, boolean] = ['', '', false];
  twoName: [string, string, boolean] = ['', '', false];
  threeName: [string, string, boolean] = ['', '', false];
  fourName: [string, string, boolean] = ['', '', false];
  fiveName: [string, string, boolean] = ['', '', false];
  sixName: [string, string, boolean] = ['', '', false];
  sevenName: [string, string, boolean] = ['', '', false];
  eightName: [string, string, boolean] = ['', '', false];
  nineName: [string, string, boolean] = ['', '', false];
  tenName: [string, string, boolean] = ['', '', false];
  elevenName: [string, string, boolean] = ['', '', false];
  twelveName: [string, string, boolean] = ['', '', false];
  thirteenName: [string, string, boolean] = ['', '', false];
  fourteenName: [string, string, boolean] = ['', '', false];
  fifteenName: [string, string, boolean] = ['', '', false];
  sixteenName: [string, string, boolean] = ['', '', false];

  question: string =
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg';

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
    this.checkTurn();
    this.checkChosen();
    this.resetBool();
  }

  resetBool() {
    if (this.chosen.length === 0) {
      this.oneName[2] = false;
      this.twoName[2] = false;
      this.threeName[2] = false;
      this.fourName[2] = false;
      this.fiveName[2] = false;
      this.sixName[2] = false;
      this.sevenName[2] = false;
      this.eightName[2] = false;
      this.nineName[2] = false;
      this.tenName[2] = false;
      this.elevenName[2] = false;
      this.twelveName[2] = false;
      this.thirteenName[2] = false;
      this.fourteenName[2] = false;
      this.fifteenName[2] = false;
      this.sixteenName[2] = false;
    }
  }

  checkTurn() {
    if (this.turn > 2) {
      this.turn = 0;
    }
  }

  handleTurn() {
    this.turn++;
    this.checkTurn();
    this.resetBool();
  }

  checkChosen() {
    if (this.chosen.length === 2) {
      if (this.chosen[0] !== this.chosen[1]) {
        setTimeout(() => {
          this.chosen = [];
        }, 1000);
      } else {
        this.completed.push(this.chosen[0]);
        this.chosen = [];
      }
    }
  }

  handleChosen(str: string) {
    this.chosen.push(str);
    this.checkChosen();
  }

  assignImages() {
    this.oneName = [
      this.pictures[parseInt(this.one) - 1][0],
      this.pictures[parseInt(this.one) - 1][1],
      false,
    ];

    this.twoName = [
      this.pictures[parseInt(this.two) - 1][0],
      this.pictures[parseInt(this.two) - 1][1],
      false,
    ];

    this.threeName = [
      this.pictures[parseInt(this.three) - 1][0],
      this.pictures[parseInt(this.three) - 1][1],
      false,
    ];

    this.fourName = [
      this.pictures[parseInt(this.four) - 1][0],
      this.pictures[parseInt(this.four) - 1][1],
      false,
    ];

    this.fiveName = [
      this.pictures[parseInt(this.five) - 1][0],
      this.pictures[parseInt(this.five) - 1][1],
      false,
    ];

    this.sixName = [
      this.pictures[parseInt(this.six) - 1][0],
      this.pictures[parseInt(this.six) - 1][1],
      false,
    ];

    this.sevenName = [
      this.pictures[parseInt(this.seven) - 1][0],
      this.pictures[parseInt(this.seven) - 1][1],
      false,
    ];

    this.eightName = [
      this.pictures[parseInt(this.eight) - 1][0],
      this.pictures[parseInt(this.eight) - 1][1],
      false,
    ];

    this.nineName = [
      this.pictures[parseInt(this.nine) - 1][0],
      this.pictures[parseInt(this.nine) - 1][1],
      false,
    ];

    this.tenName = [
      this.pictures[parseInt(this.ten) - 1][0],
      this.pictures[parseInt(this.ten) - 1][1],
      false,
    ];

    this.elevenName = [
      this.pictures[parseInt(this.eleven) - 1][0],
      this.pictures[parseInt(this.eleven) - 1][1],
      false,
    ];

    this.twelveName = [
      this.pictures[parseInt(this.twelve) - 1][0],
      this.pictures[parseInt(this.twelve) - 1][1],
      false,
    ];

    this.thirteenName = [
      this.pictures[parseInt(this.thirteen) - 1][0],
      this.pictures[parseInt(this.thirteen) - 1][1],
      false,
    ];

    this.fourteenName = [
      this.pictures[parseInt(this.fourteen) - 1][0],
      this.pictures[parseInt(this.fourteen) - 1][1],
      false,
    ];

    this.fifteenName = [
      this.pictures[parseInt(this.fifteen) - 1][0],
      this.pictures[parseInt(this.fifteen) - 1][1],
      false,
    ];

    this.sixteenName = [
      this.pictures[parseInt(this.sixteen) - 1][0],
      this.pictures[parseInt(this.sixteen) - 1][1],
      false,
    ];
  }

  getImgSrc(imageDetails: [string, string, boolean]): string {
    const [imageName, imageUrl, revealed] = imageDetails;

    if (this.completed.includes(imageName)) {
      return imageUrl; // Show the actual image if it's completed
    } else if (this.chosen.includes(imageName) && revealed) {
      return imageUrl; // Show the clicked image
    } else {
      return this.question; // Show the question image otherwise
    }
  }

  changeBool(imageDetails: [string, string, boolean]) {
    imageDetails[2] = true;
  }
}
