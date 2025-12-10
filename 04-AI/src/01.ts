function mergeAndFlatten<T, U>(obj: T, state: U): T & U {
	const newObj = {}
	return Object.assign(newObj, obj, state)
}

interface User {
    id: number;
    name: string;
    version: number;
}

interface Permissions {
    role: string;
    version: number; // Intentional conflict to test override
    active: boolean;
}

const userBase: User = { id: 101, name: 'Conan', version: 1 };
const permissions: Permissions = { role: 'Warrior', active: true, version: 2 };

// The resulting type is User & Permissions
const mergedProfile = mergeAndFlatten(userBase, permissions);
