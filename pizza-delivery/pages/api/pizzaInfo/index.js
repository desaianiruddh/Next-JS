import pizzasInfo from '../../../Data/pizzaItems.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(pizzasInfo);
  }
}
