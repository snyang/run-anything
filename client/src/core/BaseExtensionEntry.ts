import ExtensionInfo from "./ExtensionInfo";

export default class BaseExtensionEntry {
  getExtensionsInfo(): ExtensionInfo[] {
    throw new Error('Not implemented');
  }
}