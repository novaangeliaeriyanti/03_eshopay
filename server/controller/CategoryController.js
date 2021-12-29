const createRow = async (req, res) => {
  const { cate_name } = req.body;
  const result = await req.context.models.category.create({
    cate_name: cate_name,
  });
  return res.send(result);
};

const findAllRows = async (req, res, next) => {
  try {
    const result = await req.context.models.category.findAll();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

const findRowById = async (req, res) => {
  const result = await req.context.models.category.findByPk(req.params.id);
  return res.send(result);
};

export default {
  createRow,
  findAllRows,
  findRowById,
};
