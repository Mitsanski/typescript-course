abstract class MediaFile {
	fileName: string = "";
	sizeMB: number = 0;

	constructor(fileName: string, size: number) {
		this.fileName = fileName;
		this.sizeMB = size;
	}

	abstract getDetails(): string;
}

class AudioFile extends MediaFile {
	codec: string;
	constructor(fileName: string, size: number, codec: string) {
		super(fileName, size);
		this.codec = codec;
	}

	override getDetails(): string {
		return `Audio File: ${this.fileName} (${this.sizeMB}MB) using ${this.codec} codec.`;
	}
}

class VideoFile extends MediaFile {
	resolution: string;
	constructor(fileName: string, size: number, resolution: string) {
		super(fileName, size);
		this.resolution = resolution;
	}

	override getDetails(): string {
		return `Video File: ${this.fileName} (${this.sizeMB}MB) at ${this.resolution} resolution.`;
	}
}


const song = new AudioFile("track.mp3", 4.5, "AAC");
const movie = new VideoFile("trailer.mkv", 512, "1920x1080");

console.log("--- Media File Details ---");
console.log(song.getDetails());
console.log(movie.getDetails());