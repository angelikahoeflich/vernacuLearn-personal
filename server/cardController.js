
module.exports = {
  addCard: async(req,res) => {
    const db = req.app.get('db');
    const addCards = await db.add_card()
    

  },
  deleteCard: async (req, res) => {
    const db = req.app.get('db');

  },
  editCard: async(req, res) => {
    const db = req.app.get('db');

  },
  getOneCard: async(req, res) => {
    const db = req.app.get('db');

  },
  getAllCards: async(req, res) => {
    const db = req.app.get('db');
    const getCards = await db.get_all_cards()
    res.status(200).send(getCards)
  },

}