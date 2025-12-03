type InventoryItem = {
	id: number | string;
	name: string;
	tags: string | string[];
	stock: "InStock" | "OutOfStock" | "Discontinued";
	description?: string;
};

function validateItem(item: any): item is InventoryItem {
	let validID =
		(typeof item.id === "number" && item.id > 0) ||
		(typeof item.id === "string" && item.id.length !== 0);

	let validName = item.name.length > 2;

	let validTags =
		(typeof item.tags === "string" && (item.tags === "Sale" || item.tags === "New")) ||
		(Array.isArray(item.tags) && item.tags.length == 1);
	let validStock = item.stock === "InStock" || item.stock === "OutOfStock";
	return validID && validName && validTags && validStock;
}

console.log(validateItem({ id: 5, name: "Box", tags: "Sale", stock: "InStock" }));
console.log(validateItem({ id: 0, name: "Box", tags: "New", stock: "InStock" }));
console.log(validateItem({ id: "A1", name: "TV", tags: ["Elec"], stock: "Discontinued" }));
