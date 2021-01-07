# Get all deals

> ## Success case

1. ✅ Receives a **GET** request in route **/deals**
2. ✅ Checks if exists query filters (by price and date)
3. ✅ Returns **200** with deals data

> ## Exceptions

1. Returns **204** in case of empty deals in database
2. Returns **404** in case of wrong route
3. Returns **500** in case server error