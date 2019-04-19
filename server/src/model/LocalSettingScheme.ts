export interface LocalSetting {
  properties: TypeNameValue[];
}

export interface NameValue {
  name: string,
  value: any,
  description?: string,
}

export interface TypeNameValue extends NameValue {
  type: string
}

export interface ServerSetting {
  properties: NameValue[];
  setttings: TypeNameValue[]
}

export interface TypeServerValue {
  hostUrl: string
}