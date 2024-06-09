

export const openDB = (dbName, storeName) => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  
  export const addItem = (dbName, storeName, item) => {
    return openDB(dbName, storeName).then((db) => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(item);
       
        request.onsuccess = () => {
          resolve();
        };
  
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    });
  };
  
  export const getAllItems = (dbName, storeName) => {
    return openDB(dbName, storeName).then((db) => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
  
        request.onsuccess = (event) => {
          resolve(event.target.result);
        };
  
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    });
  };
  