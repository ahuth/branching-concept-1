import {create} from 'zustand';
import {scenarios, type Scenario, type Link} from './scenarios';

type State = {
  current: Scenario;
  prev: Scenario[];
  actions: {
    goto: (link: Link) => void;
  };
};

export const useStore = create<State>((set) => {
  return {
    current: scenarios[0],
    prev: [],
    actions: {
      goto: (link) => {
        set((state) => {
          const current = state.current;
          const next = scenarios.find((s) => s.id === link.dest);

          if (!next) {
            return {};
          }

          // Is it okay to imperatively updated the property like this? Or should this be cloned?
          link.selected = true;

          return {
            current: next,
            prev: [...state.prev, current],
          };
        });
      },
    },
  };
});
