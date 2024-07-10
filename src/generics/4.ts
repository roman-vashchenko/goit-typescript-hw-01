type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user: User = {
  name: "Default",
  surname: "User",
  email: "default@mail.com",
  password: "defaultPassword",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  return { ...user, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
