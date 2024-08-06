import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin.email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Joe Schmoe",
    email: "Schmoe.email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
