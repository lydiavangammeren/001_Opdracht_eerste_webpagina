// Verschil tussen promises en async/await

// Twee voorbeelden van promises:

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Processing response`);
    resolve(`Extra information: ${response}`);
  });
}

// en nu roep ik de makeRequest aan met 'Google' als argument, zodat hij resolved wordt
//en return ik processRequest

makeRequest("Google")
  .then((response) => {
    console.log("Response received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });

// Async doet hetzelfde als Promises, maar is handiger/leesbaarder:

async function doWork() {
  try {const response = await makeRequest("Google");
  console.log("Response received");
  const processedResponse = await processRequest(response);
  console.log(processedResponse)
} catch (err) {
    console.log(err)
} 
}

doWork();
