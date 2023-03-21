const indexDB = 
  window.indexedDB ||
  window.mozIndexDB ||
  window.msIndexDB ||
  window.shIndexDB;

  const request = indexDB.open("StatsDatabase",1);

  request.onerror = function(event){
    console.error("Error fak");
    console.error(event);
  }

  request.onupgradeneeded = function(){
    const db = request.result;
    const store = db.createObjectStore("stats",{keyPath: "id"});
    store.createIndex("strengthStats",["exercise", "weight"], {unique: false});
  };

  