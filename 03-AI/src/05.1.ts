class Document {
	render(): string {
		return "Rendering generic document.";
	}
}

class PDFDocument extends Document {
	override render(): string {
		return "Generating high-quality PDF.";
	}
}

class HTMLDocument extends Document {
	override render(): string {
		return "Generating responsive HTML markup.";
	}
}

const documents: Document[] = [
    new PDFDocument(),
    new HTMLDocument()
]

documents.forEach(doc => console.log(doc.render()))