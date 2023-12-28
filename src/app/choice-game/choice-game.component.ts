import { Component, OnInit } from '@angular/core';

// Define interfaces outside of the component class
interface Suspect {
  name: string;
  relationToVictim: string;
  alibi: string;
  details: string;
  distance: number;
  height: number[];
  weight: number;
  occupation: string;
}

interface Witness {
  name: string;
  statement: string;
}

interface EvidenceDetails {
  type: string;
  details: string;
}

interface Evidence {
  name: string;
  details: EvidenceDetails;
}

interface Case {
  caseDescription?: {
    name: string;
    date: string;
    location: string;
    description: string;
  };
  suspects: Suspect[];
  witnesses: Witness[];
  evidence: Evidence[];
}

@Component({
  selector: 'app-choice-game',
  templateUrl: './choice-game.component.html',
  styleUrls: ['./choice-game.component.css'],
})
export class ChoiceGameComponent implements OnInit {
  caseData: Case = {
    suspects: [],
    witnesses: [],
    evidence: [],
  };

  beachMurder: Case = {
    caseDescription: {
      name: 'The Beach Murder',
      date: 'October 15th',
      location: 'Sandy Shores Beach',
      description:
        'The murder occurred on Sandy Shores Beach late in the evening. The victim was found near the shoreline with multiple stab wounds, indicating a violent struggle. The atmosphere was tense due to ongoing conflicts among the suspects. The witnesses reported seeing individuals fleeing the scene, providing crucial but conflicting descriptions.',
    },

    suspects: [
      {
        name: 'Andrew Smith',
        relationToVictim: 'Colleague',
        alibi: 'Says he was at a business meeting at the time of the murder.',
        details: 'Known for having conflicts with the victim.',
        distance: 15,
        height: [5, 11],
        weight: 176,
        occupation: 'Recruiter',
      },

      {
        name: 'Kyle Ruiz',
        relationToVictim: 'Brother',
        alibi: 'Says he was at a Highschool football game.',
        details: 'Known for having conflicts with the victim.',
        distance: 20,
        height: [5, 10],
        weight: 190,
        occupation: 'Carpenter',
      },

      {
        name: 'Alexis Rodriguez',
        relationToVictim: 'Best Friend',
        alibi: 'Says she was watching Tv with boyfriend.',
        details: 'Known for having conflicts with the victim.',
        distance: 10,
        height: [5, 4],
        weight: 140,
        occupation: 'Waitress',
      },

      {
        name: 'Brooke Sinclair',
        relationToVictim: 'Neighbor',
        alibi: 'Says she was having family with dinner.',
        details: 'Known for having conflicts with the victim.',
        distance: 0.1,
        height: [6, 0],
        weight: 157,
        occupation: 'Nurse',
      },
    ],
    witnesses: [
      {
        name: 'Emily Smith',
        statement: 'I saw someone a short person running from the scene.',
      },
      {
        name: 'David Johnson',
        statement: 'I heard a loud noise around the time of the incident.',
      },

      {
        name: 'Michael Williams',
        statement: 'I saw a tall person running from the scene.',
      },

      {
        name: 'Emma Jones',
        statement:
          'I saw a a person with long hair, wearing a peacoat running from the scene.',
      },
    ],
    evidence: [
      {
        name: 'Bloody Knife',
        details: {
          type: 'Weapon',
          details: 'Found near the crime scene with traces of blood.',
        },
      },

      {
        name: 'Note',
        details: {
          type: 'Document',
          details: 'Contains a threatening message addressed to the victim.',
        },
      },

      {
        name: 'Foot Prints',
        details: {
          type: 'Physical',
          details: 'Shoe Print of a size 8 shoe found near the crime scene.',
        },
      },

      {
        name: '911 Phone Call',
        details: {
          type: 'Digital',
          details:
            'Victim called 911 at 8:30pm, stating someone was threatening them, and waving a knife. They said they were tired of being ignored and wanted to be heard.',
        },
      },
    ],
  };

  mansionMurder: Case = {
    caseDescription: {
      name: 'The Mansion Murder',
      date: 'November 20th',
      location: 'Luxury Mansion',
      description:
        'The murder took place on November 20th at a luxurious mansion, characterized by its opulence and grandeur. The victim was discovered in a study room, showing signs of a struggle and multiple injuries. Tensions were high among the suspects, stemming from financial disputes, marital problems, property conflicts, and inheritance issues. Witnesses provided conflicting but vital information about the suspects seen fleeing the scene.',
    },

    suspects: [
      {
        name: 'James Johnson',
        relationToVictim: 'Business Partner',
        alibi: 'Claims he was in another city on a business trip.',
        details:
          'Had financial disputes with the victim over a recent project.',
        distance: 200,
        height: [6, 2],
        weight: 190,
        occupation: 'Entrepreneur',
      },
      {
        name: 'Sophie Thompson',
        relationToVictim: 'Spouse',
        alibi: 'Says she was at a charity event at the time of the murder.',
        details:
          'Known for heated arguments with the victim about their marriage.',
        distance: 0.5,
        height: [5, 8],
        weight: 150,
        occupation: 'Socialite',
      },
      {
        name: 'Emma Davis',
        relationToVictim: 'Neighbor',
        alibi: 'Claims she was out walking her dog.',
        details:
          'Had personal conflicts with the victim over property boundaries.',
        distance: 0.1,
        height: [5, 6],
        weight: 140,
        occupation: 'Interior Designer',
      },
      {
        name: 'Oliver Wilson',
        relationToVictim: 'Relative',
        alibi: 'Said he was at home reading.',
        details:
          'Known for arguments with the victim regarding family inheritance.',
        distance: 1,
        height: [5, 10],
        weight: 160,
        occupation: 'Lawyer',
      },
    ],
    witnesses: [
      {
        name: 'Grace Anderson',
        statement: 'I saw a woman wearing a red dress fleeing the scene.',
      },
      {
        name: 'Michael Roberts',
        statement:
          'Heard a loud argument between a man and a woman just before the incident.',
      },
      {
        name: 'Sophia Green',
        statement: 'Saw someone with long hair leaving in a hurry.',
      },
      {
        name: 'Daniel White',
        statement: 'Observed a small shoe print near the crime scene.',
      },
    ],
    evidence: [
      {
        name: 'Bloody Cufflink',
        details: {
          type: 'Physical',
          details: 'Found with traces of the victim’s blood.',
        },
      },
      {
        name: 'Torn Love Letter',
        details: {
          type: 'Document',
          details:
            'Contains a passionate yet threatening message addressed to the victim.',
        },
      },
      {
        name: 'Lipstick Stain',
        details: {
          type: 'Forensic',
          details: 'Found on a glass matching the victim’s favorite lipstick.',
        },
      },
      {
        name: 'Necklace',
        details: {
          type: 'Personal',
          details: 'Victim`s necklace found at the suspect’s house.',
        },
      },
    ],
  };

  theaterMurder: Case = {
    caseDescription: {
      name: 'The Theater Murder',
      date: 'December 10th',
      location: 'Grand Theater',
      description:
        'The murder unfolded on December 10th at the prestigious Grand Theater during a crucial stage production. The victim was discovered backstage with evident signs of a struggle and fatal injuries. The suspects, comprising key personnel involved in the theater production, had conflicts with the victim over various aspects such as play production, script changes, technical arrangements, and creative differences. Witness testimonies provided conflicting yet crucial information about individuals seen fleeing the backstage area.',
    },

    suspects: [
      {
        name: 'Marcus Evans',
        relationToVictim: 'Director',
        alibi: 'Claims he was in rehearsal with the actors.',
        details: 'Had conflicts with the victim over the play production.',
        distance: 0.1,
        height: [5, 11],
        weight: 175,
        occupation: 'Theater Producer',
      },
      {
        name: 'Lily Rodriguez',
        relationToVictim: 'Lead Actress',
        alibi: 'Says she was at a costume fitting.',
        details:
          'Known for disagreements with the victim regarding script changes.',
        distance: 0.2,
        height: [5, 5],
        weight: 130,
        occupation: 'Stage Performer',
      },
      {
        name: 'Daniel Baker',
        relationToVictim: 'Stage Manager',
        alibi: 'Claims he was setting up the stage.',
        details: 'Had disputes with the victim over technical arrangements.',
        distance: 0.1,
        height: [6, 0],
        weight: 180,
        occupation: 'Production Crew',
      },
      {
        name: 'Sophie Campbell',
        relationToVictim: 'Playwright',
        alibi: 'Said she was in her office working on the script.',
        details:
          'Known for clashes with the victim regarding creative differences.',
        distance: 0.1,
        height: [5, 7],
        weight: 140,
        occupation: 'Writer',
      },
    ],
    witnesses: [
      {
        name: 'Emma Foster',
        statement:
          'I saw a woman with a costume leaving the backstage area hurriedly.',
      },
      {
        name: 'David Hill',
        statement:
          'Heard a heated argument between two people just before the incident.',
      },
      {
        name: 'Sophia Wright',
        statement: 'Saw someone with a theater prop running away.',
      },
      {
        name: 'Jackie Long',
        statement: 'Observed a smaller shoe print near the scene.',
      },
    ],
    evidence: [
      {
        name: 'Blood-Stained Script',
        details: {
          type: 'Document',
          details: 'Found with bloodstains and the victim’s signature.',
        },
      },
      {
        name: 'Ripped Costume',
        details: {
          type: 'Physical',
          details:
            'A torn piece of the lead actress’s costume found at the scene.',
        },
      },
      {
        name: 'Stage Dagger',
        details: {
          type: 'Prop',
          details: 'Found with traces of the victim’s blood and fingerprints.',
        },
      },
      {
        name: 'Anonymous Note',
        details: {
          type: 'Document',
          details:
            'Contains threats to the victim for ruining the suspect’s career.',
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  gameStart: boolean = false;
  caseNumber: number = 1;
  chances: number = 0;

  startGame(): void {
    this.gameStart = true;
    this.caseNumber = 1;
    this.chances = 0;
  }

  nextChance(): void {
    this.chances++;
  }
}
