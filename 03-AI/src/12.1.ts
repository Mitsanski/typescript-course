class Rating {
	title: string;
	private _score: number = 1;
	private _reviewer: string = "";

	constructor(title: string, score: number, reviewer: string) {
		this.title = title;
		this.score = score;
		this._reviewer = reviewer;
	}

	set score(newScore: number) {
		if (newScore > 0 && newScore < 6) {
			this._score = newScore;
		} else {
			throw new Error("Invalid rating");
		}
	}

	get reviewer(): string {
		return this._reviewer;
	}

	getDisplay(): string {
		return `Rating for ${this.title}: ${this._score}/5 (by ${this._reviewer})`;
	}
}


const newMovieRating = new Rating("Oppenheimer", 5, 'Kiril');
console.log(`\n${newMovieRating.getDisplay()}`);
console.log(`Reviewer (Getter Test): ${newMovieRating.reviewer}`);

// Test 2: Trying to set the rating to a valid score
newMovieRating.score = 3;
console.log(`\nNew Score (3): ${newMovieRating.getDisplay()}`);

// Test 3: Invalid input (should throw an error and be caught)
console.log(`\nTrying to set the rating to 6 and expects an error`);
try {
    // The setter runs the validation
    newMovieRating.score = 6;
} catch (e: any) {
    console.error(`Error Caught: ${e.message}`);
}
// Check that the score remains 3 after the failed attempt
console.log(`Score after failed attempt: ${newMovieRating.getDisplay()}`);