import userList from '../../../data/userList.json';

export default function handler(req, res) {
  const { userId } = req.query;
  if (req.method === 'DELETE') {
    const deletedUser = userList.find((user) => user.id === userId);
    const index = userList.findIndex((user) => user.id === userId);
    userList.splice(index, 1);
    res.status(201).json(userList);
  }
}
