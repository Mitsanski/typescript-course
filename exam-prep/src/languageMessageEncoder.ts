import { Cipher } from './contracts/cipher';
import { PartialMessageEncoder } from './contracts/implemented/partialMessageEncoder';
import { Language } from './contracts/language';
import { MessageEncoder } from './contracts/messageEncoder';

export class LanguageMessageEncoder<TLang extends Language, TCiph extends Cipher<TLang>>
	extends PartialMessageEncoder
	implements MessageEncoder
{
	private _encodedCount = 0;
	private _dencodedCount = 0;

	constructor(lang: TLang, cipher: TCiph) {
		super(lang, cipher);
	}

	public encodeMessage(secretMessage: unknown) {
		if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
			return 'No message';
		}

		const stripped = this.stripForbiddenSymbols(secretMessage);
		const isCompatible = this.language.isCompatibleToCharset(stripped);
		if (!isCompatible) {
			return 'Message not compatible';
		}
		this._encodedCount += stripped.length;
		const decodedMessage = this.cipher.encipher(stripped);
		return decodedMessage;
	}

	public decodeMessage(secretMessage: unknown): string {
		if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
			return 'No message';
		}

		if (!this.language.isCompatibleToCharset(secretMessage)) {
            return 'Message not compatible';
		}
        
		const dencodedMessage = this.cipher.decipher(secretMessage);
        this._dencodedCount += secretMessage.length;
		return dencodedMessage;
	}
	public totalProcessedCharacters(type: 'Encoded' | 'Decoded' | 'Both'): string {
		let totalChars = 0;

		switch (type) {
			case 'Encoded':
				return `Total processed characters count: ${this._encodedCount}`;
			case 'Decoded':
				return `Total processed characters count: ${this._dencodedCount}`;

			case 'Both':
				return `Total processed characters count: ${
					this._encodedCount + this._dencodedCount
				}`;
		}

	}

	protected stripForbiddenSymbols(message: string): string {
		let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
		forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, '')));
		return message;
	}
}
