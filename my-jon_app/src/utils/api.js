export async function fetchJobsByLanguage(language) {
  const response = await fetch(
    `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=98ef578d&app_key=5ea4df0ab13cc793a16bf7bc93fb4fb7&results_per_page=20&what=${language}%20developer&content-type=application/json`
  );
  const data = await response.json();
  console.log(data.results, "api");
  return data;
}

export async function fetchJobDetails(jobId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${jobId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}


//https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=98ef578d&app_key=5ea4df0ab13cc793a16bf7bc93fb4fb7&results_per_page=20&what=javascript%20developer&content-type=application/json
//  https://fakestoreapi.com/products/category/
