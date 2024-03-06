import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
      );
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
