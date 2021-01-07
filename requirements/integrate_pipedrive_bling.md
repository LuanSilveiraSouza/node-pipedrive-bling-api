# Integrate Pipedrive and Bling

> ## Success case

1. ✅ A **GET** request is made to Pipedrive api gathering all deals
2. ✅ The deals are filtered by "won" status and formated
3. ✅ Each deal's id are checked if are already inside database, if not it is inserted 
4. ✅ The new deals are inserted in the Bling api with a **POST** request
5. ✅ The flow are repeated by a CronJob every X time

> ## Exceptions

1. Interrupts the flow if Pipeline api return a status different of 200
2. Interrupts the flow if cannot connect to the database
3. Interrupts the flow if Bling api return a status different to 201