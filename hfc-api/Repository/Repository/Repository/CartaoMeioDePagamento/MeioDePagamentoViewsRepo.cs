namespace hfc_api.Repository.Repository.Repository.CartaoMeioDePagamento
{
  public class MeioDePagamentoViewsRepo : IMeioDePagamentoViewsRepo
  {
    private readonly ApiDbContext _context;
    public MeioDePagamentoViewsRepo(ApiDbContext context) {
       _context = context;
    }

    public async Task<IEnumerable<MeioDePagamentoViews>> GetAllMeioDePagamentoViews()
    {
      return await _context.meiodepagamento!.ToListAsync();
    }
    public async Task<MeioDePagamentoViews> GetMeioDePagamentoViewsId(int id)
    {
      var meiodepagamento = await _context.meiodepagamento.FirstOrDefaultAsync(m => m.codigo == id);
      if (meiodepagamento == null) {
        throw new ArgumentNullException(nameof(meiodepagamento));
      }
      return meiodepagamento;
    }
    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }
    public IEnumerable<MeioDePagamentoViews> GetAllMeioDePagamentoViewsByUser(int idUser) {
      var meioDePagamento = _context!.meiodepagamento!
        .FromSqlRaw($"SELECT meiodepagamento.* as meioDePagamento FROM usuarios INNER JOIN meiodepagamento ON usuarios.codigo = meiodepagamento.usercoder WHERE usuarios.codigo = {idUser}")
        .ToList();
      if (meioDePagamento == null) {
        throw new ArgumentNullException(nameof(meioDePagamento));
      }
      return meioDePagamento;
    }
  }
}
