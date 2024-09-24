import type {ReactNode} from 'react';

export interface Scenario {
  id: string;
  text: ReactNode;
  links: Link[];
}

export interface Link {
  text: string;
  dest: string;
  selected?: boolean;
}

export const scenarios: Scenario[] = [
  {
    id: '1',
    text: 'You wake up in a house. Where, who\'s, or how you got there? No idea. A cat looks at you with a hint of annoyance, and says "Well?"',
    links: [
      {text: '"Well what?"', dest: '2'},
      {
        text: "Look away, and pretend you didn't just see a talking cat.",
        dest: '3',
      },
    ],
  },
  {
    id: '2',
    text: '"Is it done? Did you kill him like we agreed?"',
    links: [],
  },
  {
    id: '3',
    text: 'The cat rolls its eyes and says "Ooookkkayyyy, guess we\'re just going to ignore me, then. Suit yourself"',
    links: [],
  },
];
