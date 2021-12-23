const reducer = (state = [], action) => {
    switch (action.type) {
        case addEmp: {
            state = [...state, payload];
            return state;
        }
        case editEmp:
            state = state; 
            // logic for find state;
            // logic for edit state
            return state;
        case removeEmp:
            state = state; 
            // logic for find state;
            // logic for remove state
            return state;
    }
}