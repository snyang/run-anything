# Concept Model

## Concepts

- Server
  The information of the server to which this application is deployed.

- PropertySet
  {name, description, properties[]}
  Properties which are related to the server environment, would be used by executors.

- Property
  {name, description, value}
  A property and its value

- User
  The running user information

- Task
  {id, name, description}

- Action
  {id, tags, command, input, output, errors}

- File Action
  {id, tags, type[download/upload], filename, source, target, result}

- CommandSet
  {name, description, tags[], commands[]}

- Command
  {name, description, extension, tags[], script, parameters[]}
  The system will try to find properties for values of parameters.

- Executor
  {name, description, tags[], supportExtensions[]}

- Tag
  {value, type}

- Tag Type
  none/task
