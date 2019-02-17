# Concept Model

## Concepts

- Host
  The host of the HTML application, that is used to store the application settings, e.g. servers information.

- Server
  The server which the HTML application can connect.

- Host Settings/Server Settings/Context

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
