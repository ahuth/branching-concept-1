import {create} from 'zustand';
import {scenarios, type Scenario} from './scenarios';

type State = {
  stack: Scenario[];
  actions: {
    add: (id: string) => void;
  };
};

export const useStore = create<State>((set) => {
  return {
    stack: [scenarios[0]],
    actions: {
      add: (id) => {
        set((state) => {
          const scenario = scenarios.find((s) => s.id === id);

          if (!scenario) {
            return {};
          }

          return {
            stack: [...state.stack, scenario],
          };
        });
      },
    },
  };
});
