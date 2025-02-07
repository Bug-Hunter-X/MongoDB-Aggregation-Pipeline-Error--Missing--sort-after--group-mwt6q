```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: '$field', count: {$sum: 1}}}, // Missing $sort after $group
  {$project: {_id: 0, field: '$_id', count: 1}}
]);
```