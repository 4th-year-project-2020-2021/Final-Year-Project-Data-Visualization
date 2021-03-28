// Class to sort listed data from highest to lowest cases
export const sortData = (data) => {
    const sortedData = [...data];
    
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1; // False
      } else {
        return 1; // True
      }
    });
    return sortedData;
  };


