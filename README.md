## ESetting up GraphQL,prisma Node/Express and PostgreSQL

- GraphQL
- prisma
- Node
- Typescript
- PostgreSQL

### Folder structure

<pre>
	.
	├── server.js
	├──pgAdaptor.js
	├── package.json
	├── README.md
	├── schemas
	│   ├── mutation.js
	│   ├── query.js
	│   ├── qutypeery.js	
	│    
	└── yarn.lock
</pre>

### create db PostgreSQL

CREATE TABLE admin(
ID serial PRIMARY KEY,
username VARCHAR(255),
email VARCHAR(255),
joined TIMESTAMP,
last_logged_in TIMESTAMP
);
CREATE TABLE project(
ID serial PRIMARY KEY,
creator_id integer NOT NULL,
created TIMESTAMP NOT NULL,
title VARCHAR (50),
description VARCHAR (255),
);

### testing

`yarn`
`node server.js`
navigate to `http://localhost:5000/api`
try:
`{ projects(id: 1) { title description } }`

### feat

use ts and prisma
