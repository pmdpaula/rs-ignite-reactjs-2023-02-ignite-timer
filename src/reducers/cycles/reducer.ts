import { produce } from 'immer';
import { ActionTypes } from './actions';

/* eslint-disable indent */
export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // };
      return produce(state, (draftState) => {
        draftState.cycles.push(action.payload.newCycle);
        draftState.activeCycleId = action.payload.newCycle.id;
      });
    }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {
      //         ...cycle,
      //         interruptedDate: new Date(),
      //       };
      //     }

      //     return cycle;
      //   }),
      //   activeCycleId: null,
      // };

      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex === -1) {
        return state;
      }

      return produce(state, (draftState) => {
        draftState.cycles[currentCycleIndex].interruptedDate = new Date();
        draftState.activeCycleId = null;
      });
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {
      //         ...cycle,
      //         finishedDate: new Date(),
      //       };
      //     }

      //     return cycle;
      //   }),
      //   activeCycleId: null,
      // };

      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex === -1) {
        return state;
      }

      return produce(state, (draftState) => {
        draftState.cycles[currentCycleIndex].finishedDate = new Date();
        draftState.activeCycleId = null;
      });
    }

    default:
      return state;
  }
};
