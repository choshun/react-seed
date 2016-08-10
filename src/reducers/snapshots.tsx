// TODO: maybe .assign snapShotProps with this
interface Snapshot {
    type: string,
    selected: boolean
}

interface Action {
    type: string,
    index: number
}

const initialState = [
  {
    type: 'pie',
    selected: false
  },
  {
    type: 'bar',
    selected: false
  },
  {
    type: 'chart',
    selected: false
  }
];

export default function (state = initialState, action: Action) {
    switch(action.type) {
        case 'selectSnapshot':
            state.forEach((snapshot: Snapshot) => {
                snapshot.selected = false;
            });

            state[action.index].selected = true;

            return Object.assign([], state);
    default:
        return state;
  }
}