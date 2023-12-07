import { Component } from '@angular/core';

@Component({
  selector: 'app-mad-libs',
  templateUrl: './mad-libs.component.html',
  styleUrls: ['./mad-libs.component.css'],
})
export class MadLibsComponent {
  prompt: boolean = true;
  nouns: string[] = ['', '', ''];
  adjectives: string[] = ['', '', ''];
  verbs: string[] = ['', '', ''];
  stories: string[][] = [];

  handleNounChange(event: any, index: number): void {
    const newNouns = [...this.nouns];
    newNouns[index] = event.target.value;
    this.nouns = newNouns;
    this.updateStories(newNouns, this.adjectives, this.verbs);
    console.log(newNouns);
  }

  handleAdjectiveChange(event: any, index: number): void {
    const newAdjectives = [...this.adjectives];
    newAdjectives[index] = event.target.value;
    this.adjectives = newAdjectives;
    this.updateStories(this.nouns, newAdjectives, this.verbs);
  }

  handleVerbChange(event: any, index: number): void {
    const newVerbs = [...this.verbs];
    newVerbs[index] = event.target.value;
    this.verbs = newVerbs;
    this.updateStories(this.nouns, this.adjectives, newVerbs);
  }

  updateStories = (
    newNouns: string[],
    newAdjectives: string[],
    newVerbs: string[]
  ) => {
    const newStories = [
      [
        `Once upon a time, there was a ${newNouns[0]} who wanted to ${newVerbs[0]} the ${newNouns[1]}.`,
        `The ${newNouns[0]} was very ${newAdjectives[0]} and ${newAdjectives[1]}.`,
        `The ${newNouns[0]} tried to ${newVerbs[1]} the ${newNouns[1]} and ${newVerbs[2]} the ${newNouns[1]}.`,
        `The ${newNouns[1]} was very ${newAdjectives[2]} and ${newAdjectives[0]}.`,
        `The ${newNouns[0]} and the ${newNouns[1]} lived happily ever after.`,
      ],
      [
        `I decided to ${newVerbs[0]} a ${newNouns[0]} today.`,
        `The ${newNouns[0]} was very ${newAdjectives[0]} and ${newAdjectives[1]}.`,
        `All of a sudden, a ${newNouns[1]} tried to ${newVerbs[1]}.`,
        `This made a ${newNouns[2]} very ${newAdjectives[2]}, so they had to ${newVerbs[2]} the ${newNouns[1]}.`,
      ],
      [
        `In a mysterious forest, a ${newNouns[0]} and a ${newNouns[1]} embarked on a journey.`,
        `The ${newNouns[0]} was known for being ${newAdjectives[0]} and ${newAdjectives[1]}, while the ${newNouns[1]} was ${newAdjectives[2]}.`,
        `Their quest was to ${newVerbs[0]} the legendary ${newNouns[2]} and ${newVerbs[1]} its hidden power.`,
        `As they delved deeper, challenges arose, forcing them to ${newVerbs[2]} their skills and rely on each other's ${newAdjectives[0]} traits.`,
        `In the end, their determination and ${newAdjectives[1]} bond allowed them to conquer the ${newNouns[2]} and bring peace to the forest.`,
      ],
    ];
    this.stories = newStories;
  };

  resetGame(): void {
    this.prompt = true;
    this.nouns = ['', '', ''];
    this.adjectives = ['', '', ''];
    this.verbs = ['', '', ''];
    this.stories = [];
  }

  submitMadLib(): void {
    this.prompt = false;
    this.updateStories(this.nouns, this.adjectives, this.verbs);
  }
}
