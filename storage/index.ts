type LocalStorageKey = "token";
class Storage {
  static getItem(key: LocalStorageKey) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }
}

export default Storage;
