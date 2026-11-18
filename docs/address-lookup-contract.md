# Contract: shared address lookup service

Addresses appear on most forms. Instead of every form checking postal codes its own way,
one team builds a lookup service and every form calls it. In Lab 4 you build that service
with Copilot. Follow this contract and your form will also work with a neighbour's service.

## Run

- A separate small service in `services/address-lookup/`, with its own start command and tests.
- Default address: `http://localhost:4000`.
- Allows requests from web pages served from `localhost` (CORS).
- Made-up or public data only. Use the sample table below.

## Request

```
GET /address?postalCode=K1A0B1
```

The postal code is accepted with or without a space, in upper or lower case.

## Responses

| Case | Status | Body |
| --- | --- | --- |
| Found | 200 | `{ "postalCode": "K1A 0B1", "city": "Ottawa", "province": "ON" }` |
| Not a Canadian postal code | 400 | `{ "error": "invalid_postal_code" }` |
| Valid format, not in the table | 404 | `{ "error": "not_found" }` |
| Service unavailable (simulated) | 503 | `{ "error": "unavailable" }` |

The postal code `X0X 0X0` always returns 503, so that every form can test what happens when the service is down.

```
GET /health   ->   200   { "status": "ok" }
```

## Sample table

| Postal code | City | Province |
| --- | --- | --- |
| K1A 0B1 | Ottawa | ON |
| M7A 1A1 | Toronto | ON |
| M5H 2N2 | Toronto | ON |
| L8P 4Y5 | Hamilton | ON |
| N6A 4L9 | London | ON |
| P3E 5P9 | Sudbury | ON |
| P7B 6T8 | Thunder Bay | ON |
| K7L 2Z3 | Kingston | ON |
| H2Y 1C6 | Montreal | QC |
| V8W 1P6 | Victoria | BC |

## What the form does with it

- When the user enters a postal code, call the service and fill in the city and province.
- The user can always change what was filled in.
- If the service answers 404, 503, or not at all within 3 seconds, say so in plain words and let the user type the address.
- The form's own format checks still apply to an address typed by hand.
