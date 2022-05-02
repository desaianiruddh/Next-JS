import userList from '../../../data/userList.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(userList);
    console.log(req);
  } else if (req.method === 'POST') {
    const user = req.body;
    userList.push(user);
    res.status(201).json(user);
  }
}
