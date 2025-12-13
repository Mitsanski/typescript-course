import { PartialMonthlyMotel } from './contracts/partialMonthlyMotel';
import { Room } from './contracts/room';
import { SummerMonth, WinterMonth } from './contracts/util';
import { RoomNumber } from './types';

function isRoom(room: unknown): room is Room {
	return (
		typeof room === 'object' &&
		room !== null &&
		'roomNumber' in room &&
		typeof (room as Room).roomNumber === 'string' &&
		'totalPrice' in room &&
		typeof (room as Room).totalPrice === 'number' &&
		'cancellationPrice' in room &&
		typeof (room as Room).cancellationPrice === 'number'
	);
}

export class MonthlyMotel<TMonth extends SummerMonth | WinterMonth> extends PartialMonthlyMotel {
	private _allRooms: Map<RoomNumber, Room> = new Map();
	private _bookings: Map<string, Set<TMonth>> = new Map();
	private _totalBudget = 0;
	constructor() {
		super();
	}
	addRoom(room: unknown): string {
		if (!isRoom(room)) {
			return 'Value was not a Room.';
		}

		const roomToAdd = room;
		const roomNumber = roomToAdd.roomNumber;

		if (this._allRooms.has(roomNumber)) {
			return `Room '${roomNumber}' already exists.`;
		}

		this._allRooms.set(roomNumber, roomToAdd);

		return `Room '${roomNumber}' added.`;
	}
	bookRoom(roomNumber: RoomNumber, bookedMonth: TMonth): string {
		const room = this._allRooms.get(roomNumber);
		if (!room) {
			return `Room ${roomNumber} does not exist.`;
		}

		let bookedMonths = this._bookings.get(roomNumber);

		if (bookedMonths && bookedMonths.has(bookedMonth)) {
			return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
		}

		if (!bookedMonths) {
			bookedMonths = new Set<TMonth>();
			this._bookings.set(roomNumber, bookedMonths);
		}

		bookedMonths.add(bookedMonth);

		this._totalBudget += room.totalPrice;
		return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
	}
	cancelBooking(roomNumber: RoomNumber, bookedMonth: TMonth): string {
		const room = this._allRooms.get(roomNumber);
		if (!room) {
			return `Room ${roomNumber} does not exist.`;
		}

		let bookedMonths = this._bookings.get(roomNumber);

		if (bookedMonths && !bookedMonths.has(bookedMonth)) {
			return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
		}

		bookedMonths!.delete(bookedMonth);
		this._totalBudget -= room.cancellationPrice;
		return `Booking cancelled for Room '${room.roomNumber}' for '${bookedMonth}'.`;
	}

	getTotalBudget(): string {
		return `Motel: ${MonthlyMotel.MotelName}\nTotal Budget: $${this._totalBudget.toFixed(2)}`;
	}
}
