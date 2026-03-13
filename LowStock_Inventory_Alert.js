function getLowStockItems(inventory, threshold) {
    // Step 1: Filter items where quantity is less than or equal to the threshold
    const lowStock = inventory.filter(item => item.quantity <= threshold);

    // Step 2: Sort the filtered items by quantity (lowest → highest)
    lowStock.sort((a, b) => a.quantity - b.quantity);

    // Step 3: Return only the item names in sorted order
    return lowStock.map(item => item.name);
}

// Example usage:
const inventory = [
    { name: "Pump Seal", quantity: 3 },
    { name: "Valve Kit", quantity: 10 },
    { name: "Bearing", quantity: 1 },
    { name: "Coupling", quantity: 5 }
];

console.log(getLowStockItems(inventory, 5));
// Output: ["Bearing", "Pump Seal", "Coupling"]
