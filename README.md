Concise BE Take Home Test

Create a simple Rest API project (Node JS, Express, Sequelize, Postgresql, and Promise), which contains a user and group table with many to many relations (a user can be in more than 1 group, a group can have more than one user), where users have data such as name, email, phone number, and address, while groups have data such as name and description. With the project before, create additional APIs with table Task, which have data such as name, deadline, and user_id (which user is handling the task), where task and user have one to many relations (a user can have multiple tasks, but 1 task can only be handled by 1 user)

User table endpoint:
- GET "/users" to get all users with groups and tasks
- GET "/users/:id" to get a user by id with groups and tasks
- POST "/users" to create a new user
- PUT "/users/:id" to update a user by id with all data included (name, email, phone, and address)
- PATCH "/users/:id" to update specific fields of a user by id
- DELETE "/users/:id" to delete a specific user by id

Group table endpoint:
- GET "/groups" to get all groups with users
- GET "/groups/:id" to get a group by id with users
- POST "/groups" to create a new group
- PUT "/groups/:id" to update a group by id with all data included (name, description)
- PATCH "/groups/:id" to update a group by id
- DELETE "/groups/:id" to delete a specific group by id

User-group pivot table endpoint:
- POST "/add/user/:userId/group/:groupId" to add a user by id to a group by id
- DELETE "/remove/user/:userId/group/:groupId" to remove a user by id from a group by id

Task table endpoint:
- GET "/tasks" to get all tasks with users
- GET "/tasks/:id" to get a task by id with users
- POST "/tasks" to create a new task
- PUT "/tasks/:id" to update a task by id with all data included (name, deadline, userId)
- PATCH "/tasks/:id to update a task by id
- DELETE "/tasks/:id to delete a specific task by id