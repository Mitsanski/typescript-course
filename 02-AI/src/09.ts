interface Playable {
	isPlaying: boolean;
	play: () => string;
}

interface FileDetails {
	filename: string;
	size: number;
	duration: number;
	codec: string;
	getMetadata: () => string;
	getFileSize: () => string;
}

interface MediaItem extends Playable, FileDetails {}

class AudioFile implements Playable, FileDetails {
	filename: string;
	size: number;
	duration: number;
	codec: string;
	isPlaying = false;

	constructor(filename: string, size: number, duration: number, codec: string) {
		this.filename = filename;
		this.size = size;
		this.duration = duration;
		this.codec = codec;
	}

	play() {
		this.isPlaying = true;
		return "Playing";
	}
	getMetadata() {
		return `${this.filename} (${this.codec})`;
	}
	getFileSize() {
		return `${this.size}MB`;
	}
}

const song: MediaItem = new AudioFile("Tepni", 67, 67, "sure");

console.log(song.getFileSize());
