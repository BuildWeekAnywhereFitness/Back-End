# Back-End
ENDPOINTS

[POST] /api/auth/register - signs up user for instructor or client role

[POST] /api/auth/login - logs in user

[GET] /api/instructors - will get all instructors

[GET] /api/instructors/:id - will get instructor by id

[POST] /api/instructors - will add instructor

[PUT] /api/instructors/:id - will update instructor by id

[DELETE] /api/instructors/:id - will delete instructor by id

[GET] /api/clients -will get all clients (only instructor can get role:1)

[GET] /api/clients/:id -will get client by id (only instructor can get)

[PUT] /api/clients/:id -will let client update information

[DELETE] /api/clients/:id -will delete client 

[GET] /api/classes - gets all classes created

[GET] /api/classes/:id - gets single class by ID

[POST] /api/classes - creates a new class

[PUT] /api/classes/:id - updates class by its ID

[DELETE] /api/classes/:id - deletes class by its ID

[GET] /api/locations - gets all locations

[GET] /api/locations/:id - gets location by ID

[POST] /api/locations - creates a new location

[PUT] /api/locations/:id - updates location by ID

[DELETE] /api/locations/:id - deletes location by ID


[GET] /api/attending - gets all classes with attending clients

[GET] /api/attending/:id - gets class being attended by ID

[POST] /api/attending/:id - add client to class

[DELETE] /api/attending - deletes clients in class ID
