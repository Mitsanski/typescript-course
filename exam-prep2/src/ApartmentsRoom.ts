import { Room } from './contracts/room';
import { RoomNumber } from './types';

export class Apartment implements Room {
	private _price: number;
	roomNumber: RoomNumber;
	private _numberOfGuests: number;
	constructor(price: number, roomNumber: RoomNumber, numberOfGuests: number) {
		this._price = price;
		this.roomNumber = roomNumber;
		this._numberOfGuests = numberOfGuests;
	}
	get totalPrice() {
		return this._price * this._numberOfGuests;
	}

	get cancellationPrice() {
		return this.totalPrice - (this.totalPrice * 0.2);
	}
}
