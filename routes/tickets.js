// GET all (pagination optional)
router.get('/', async (req, res) => { ... });

// GET one
router.get('/:id', async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  res.json(ticket);
});

// CREATE
router.post('/', async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.json({ message: "Ticket créé", ticket });
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Ticket modifié", updated });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket supprimé" });
});
