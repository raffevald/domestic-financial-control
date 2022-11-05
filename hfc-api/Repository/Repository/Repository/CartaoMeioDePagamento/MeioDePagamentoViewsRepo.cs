using hfc_api.Data;
using hfc_api.Models.CartaoMeioDePagamento;
using hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento;

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
  }
}