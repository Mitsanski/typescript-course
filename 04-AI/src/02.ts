class ObservableState<T> {
    private listeners: ((newState: T) => void)[] = [];

    state: T

    constructor(state: T){
        this.state = state;
    }

    subscribe(callback: (newState: T) => void){
       this.listeners.push(callback)
    }

    update(newState:T){
        this.state = newState

        for (const listener of this.listeners){
            listener(this.state);
        }
    }
}
interface AppState {
    count: number;
    status: string;
}

// Test 1: Simple Object State and Multiple Subscribers
let state = new ObservableState<AppState>({ count: 0, status: 'Initial' });

// Subscribe A
state.subscribe(s => console.log('A sees count:', s.count));

// Subscribe B
state.subscribe(s => console.log('B sees status:', s.status));

console.log("--- Update 1 (State: 5, Running) ---");
state.update({ count: 5, status: 'Running' });

console.log("--- Update 2 (State: 10, Finished) ---");
state.update({ count: 10, status: 'Finished' });

console.log("Final State:", state.state);