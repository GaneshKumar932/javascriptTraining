


document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  const getRandomString = () => {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  };
  
  const getRandomNumberLessThan = (max) => Math.floor(Math.random() * max);
  
  const makeServerCall = (searchText) => {
    if (searchText === '') {
      return Promise.resolve([]);
    }
  
    let results = [];
  
    for (let i = 0; i < 2 + getRandomNumberLessThan(5); i++) {
      results.push(`${searchText}- ${i}} - ${getRandomString()}`);
    }
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve(results);
        } else {
          reject('Internal server error');
        }
      }, 1000 * Math.random());
    });
  };
  
  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, args), delay);
    };
  };
  
  const updateSearchResults = (searchResults) => {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = "";
    searchResults.forEach((str) => {
      const p = document.createElement('p');
      p.textContent = str;
      resultDiv.appendChild(p);
      resultDiv.appendChild(document.createElement('hr'));
    });
  };
  
  class AutoCompleter {
    searchbox = null;
    constructor() {
      this.searchbox = document.getElementById('searchbox');
      this.debouncedServerCall = debounce(async (searchText) => {
        try {
          const result = await makeServerCall(searchText);
          updateSearchResults(result);
        } catch (error) {
          console.error('Error fetching data from the server:', error);
        }
      }, 1000);
  
      this.handleTextChange = this.handleTextChange.bind(this);
      this.searchbox.addEventListener("input", this.handleTextChange);
    }
  
    handleTextChange(event) {
      const searchStr = event.target.value;
      this.searchbox.value = searchStr;
      this.debouncedServerCall(searchStr);
    }
  }
  const ac = new AutoCompleter();
});