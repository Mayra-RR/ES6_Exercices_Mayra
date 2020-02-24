addElement = () => {
    var addId = document.getElementById("add").value;
    thatSoFetch(addId);
  };
  
  function thatSoFetch(addId) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + addId)
      .then(response => {
        return response.json();
      })
      .then(myFetch => {
        var numId = document.createTextNode(
          "Id: " + myFetch.id + " Title: " + myFetch.title
        );
        return showElement(numId);
      });
  }
  
  function showElement(numId) {
    var apiList = document.getElementsByTagName("ul");
    var idli = document.createElement("li");
    apiList[0].appendChild(idli);
    idli.appendChild(numId);
  }
  