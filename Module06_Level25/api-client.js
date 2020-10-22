const apiUrl = "https://wincacademydatabase.firebaseio.com/lydia/tasks";

const getTasks = async () => {
  try {
    const response = await fetch(`${apiUrl}.json`, {
      method: "GET",
    });
    const result = await response.json();

    //Convert tasks:

    //console.log("Before (the 'raw' object):", result);

    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));
    //console.log("After (the tasks array):", tasks);

    return tasks;
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};

const postTask = async (task) => {
 
  try {
    const result = await fetch(`${apiUrl}.json`, {
      method: "POST",
      body: JSON.stringify(task), // zet een JavaScript object of value om naar een JSON string
    });
    return result;
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};

const putTask = async (id, description, done) => {
  try {
    const result = await fetch(`${apiUrl}/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({
        id, 
        description,
        done
      }),
    });
    return result;
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};

const removeTaskFromAPI = async (id, description, done) => {
  try {
    const result = await fetch(`${apiUrl}/${id}.json`, {
      method: "DELETE",
      body: JSON.stringify({
        id,
        description,
        done
      }),
    });
    return result;
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};

const removeAllTasksFromAPI = async () => {
  try {
    const result = await fetch(`${apiUrl}.json`, {
      method: "DELETE",
    });
    return result;
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};
