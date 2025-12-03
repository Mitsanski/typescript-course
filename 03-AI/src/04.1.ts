interface DataStore {
    save(key: string, data: any): void;
    load(key: string): any;
    delete(key: string): boolean;
}

class inMemoryStore implements DataStore {
    private store = new Map<string, any>();

    save(key: string, data: any): void {
        this.store.set(key, data);
        console.log(`[SAVE] Key: ${key} saved successfully.`)
    }

    load(key: string) : any {
        const data = this.store.get(key);
        return data !== undefined ? data : null
    }

    delete(key: string): boolean{
        const wasDeleted = this.store.delete(key);
        console.log(`[DELETE] Key: ${key}. Success: ${wasDeleted}`)
        return wasDeleted
    }
}

const store = new inMemoryStore();
console.log("--- Starting DataStore Test Suite ---");

// Test Case 1: SAVE and LOAD (Basic CRUD)
const key1 = "user_settings";
const data1 = { theme: 'dark', notifications: true };
store.save(key1, data1);

const loadedData1 = store.load(key1);
console.log(`[TEST 1] Load existing key '${key1}':`);
// Test 1.1: Did it load the correct data?
console.log(`   Expected: { theme: 'dark', notifications: true } | Actual:`, loadedData1);
// Test 1.2: Check type (JSON objects loaded from storage should be objects)
console.log(`   Is loaded data an object?`, typeof loadedData1 === 'object');