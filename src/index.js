function filterByTerm(inputArr, searchTerm) {
  if (!inputArr || inputArr.length === 0) {
    throw new Error("inputArr cannot be empty");
  }
  if (!searchTerm || searchTerm.trim() === "") {
    throw new Error("searchTerm cannot be empty");
  }
  return inputArr.filter((item) => {
    const url = new URL(item.url);
    return url.href.includes(searchTerm.toLocaleLowerCase());
  });
}

try {
  const filteredItems = filterByTerm(
    [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ],
    "link"
  );
  console.log(filteredItems);
} catch (error) {
  console.error(error.message);
}

module.exports = filterByTerm;