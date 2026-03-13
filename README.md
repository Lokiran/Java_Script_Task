



getLowStockItems(inventory, threshold) - Summary
What it does:
Returns the names of items whose quantity is ≤ threshold, sorted from lowest to highest quantity.
Core logic & concepts used:

Filtering: Array.prototype.filter() keeps only items with quantity <= threshold.
Sorting: Array.prototype.sort() orders the filtered items by quantity ascending.
Mapping: Array.prototype.map() extracts just the name from each item.

Why it’s useful:
Quickly highlights low-stock items in a clean, prioritized list for fast replenishment decisions.



summarizeWorkOrders(workOrders) - Summary
What it does:
Returns an object summarizing Maximo work orders with:

total: total number of orders
open: count where status === 'OPEN'
closed: count where status === 'CLOSE'
avgLabourHours: average of labourHours, rounded to 1 decimal

Core logic & concepts used:

Counting by status: filter(...).length for OPEN and CLOSE.
Aggregation: reduce() sums labourHours across all work orders.
Average with rounding: (sum / total).toFixed(1) then wrapped with Number(...) for a numeric result.
Edge case handling: If there are no work orders, avgLabourHours returns 0 to avoid division by zero.

Why it’s useful:
Provides a quick operational snapshot—workload distribution and labor effort—ideal for dashboards and KPIs.
