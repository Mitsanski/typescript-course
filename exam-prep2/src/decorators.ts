export function decorator1() {}
export function decorator2(target: any, propName: string, descriptor: PropertyDescriptor) {
	let originalGetter = descriptor.get!;

	descriptor.get = function () {
		let result = originalGetter.call(this);
		let modifiedResult = 1.2 * result;
		return modifiedResult;
	};
}
export function decorator3(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
	let getter = descriptor.get!;
	descriptor.get = function () {
		let result = getter.call(this);
		let modifiedResult = 1.2 * result;
		return modifiedResult;
	};
}
export function decorator4() {}
export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T) {
	abstract class Anonymous extends constructor {
		public static readonly MotelName = 'Monthly Motel';
	}
}
