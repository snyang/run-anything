import ExtensionInfo from "./ExtensionInfo";

export default class BaseExtensionEntry {
  getExtensions(): ExtensionInfo[] {
    throw new Error('Not implemented');
  }
}