export default function getFullResponseFromAPI(success) {
  const successObj = {
    status: 200,
    body: 'Success',
  };
  const failObj = {
    '<rejected> Error': 'The fake API is not working currently',
  };
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(successObj);
    } else {
      reject(failObj);
    }
  });
}
