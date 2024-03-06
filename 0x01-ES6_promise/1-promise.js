export default function getFullResponseFromAPI(success) {
  const successObj = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(successObj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
