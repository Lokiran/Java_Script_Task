
function summarizeWorkOrders(workOrders) {
    // Total number of work orders
    const total = workOrders.length;

    // Count how many are OPEN
    const open = workOrders.filter(wo => wo.status === "OPEN").length;

    // Count how many are CLOSE
    const closed = workOrders.filter(wo => wo.status === "CLOSE").length;

    // Calculate total labour hours using reduce
    const totalLabourHours = workOrders.reduce((sum, wo) => sum + wo.labourHours, 0);

    // Calculate average labour hours
    // If no work orders, avoid division by zero → return 0
    const avgLabourHours =
        total === 0 ? 0 : Number((totalLabourHours / total).toFixed(1));

    // Return the summary object
    return {
        total: total,
        open: open,
        closed: closed,
        avgLabourHours: avgLabourHours
    };
}

// Example usage
const workOrders = [
    { id: "WO1001", status: "OPEN", labourHours: 3.5 },
    { id: "WO1002", status: "CLOSE", labourHours: 5.0 },
    { id: "WO1003", status: "OPEN", labourHours: 2.0 }
];

console.log(summarizeWorkOrders(workOrders));
