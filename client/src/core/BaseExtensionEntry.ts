import ExtensionInfo from "./ExtensionInfo";

export default class BaseExtensionEntry {
  getExtensionInfo(): ExtensionInfo {
    throw new Error('Not implemented');
  }
}