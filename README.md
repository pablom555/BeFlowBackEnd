# Be-Flow

Be-Flow BackEnd Challenge

## Install

```bash
git clone https://github.com/pablom555/BeFlowBackEnd.git
yarn install
```

## Populate DataBase
### Load current year holidays

```bash
yarn run init
```

## Run 
```bash
yarn run build
yarn run start
```

## Available Endpoints

### localhost:8000/api/v1/holidays
returns all holidays

```json
[
  {
    "_id": "63a38d16903ca202da2d4eed",
    "day": 1,
    "id": "año-nuevo",
    "info": "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
    "month": 1,
    "reason": "Año Nuevo",
    "type": "inamovible",
    "year": 2022,
    "__v": 0
  }, 
  {
    "_id": "63a38d16903ca202da2d4eee",
    "day": 28,
    "id": "carnaval",
    "info": "https://es.wikipedia.org/wiki/Carnaval",
    "month": 2,
    "reason": "Carnaval",  
    "type": "inamovible",
    "year": 2021,
    "__v": 0
  },
]
```

### localhost:8000/api/v1/holidays?year=2022
returns holidays of the year 2022

```json
[
  {
    "_id": "63a38d16903ca202da2d4eed",
    "day": 1,
    "id": "año-nuevo",
    "info": "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
    "month": 1,
    "reason": "Año Nuevo",
    "type": "inamovible",
    "year": 2022,
    "__v": 0
  }
]
```

### localhost:8000/api/v1/holidays/:id
returns a holiday

```json
{
  "_id": "63a38d16903ca202da2d4eed",
  "day": 1,
  "id": "año-nuevo",
  "info": "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
  "month": 1,
  "reason": "Año Nuevo",
  "type": "inamovible",
  "year": 2022,
  "__v": 0
}

```