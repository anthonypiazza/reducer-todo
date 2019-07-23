export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Read Grokking Algos',
            completed: false,
            id: 3892987590
        },
        {
            item: 'Build Personal Site',
            completed: false,
            id: 3892987591
        },
        {
            item: 'Study for Coding Interviews',
            completed: false,
            id: 3892987592
        },
        {
            item: 'Apply for Positions',
            completed: false,
            id: 3892987593
        }
    ]
}


export const reducer = (state, action) => {
  switch (action.type) {
        case 'ADD_TASK':
            const newItem ={
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state, 
                tasks: [...state.tasks, newItem]
            }
        case 'TOGGLE_ITEM':
            return{
                ...state,
                tasks: state.tasks.map(item => {
                    if(action.payload === item.id) {
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item;
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(item => !item.completed)
            }
        default:
        return state
  }
}
