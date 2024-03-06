import { uploadPhoto, createUser } from './utils';

function parseData(data) {
  const [photo, user] = data;
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
}

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(parseData)
    .catch(() => {
      console.error('Signup system offline');
    });
}
