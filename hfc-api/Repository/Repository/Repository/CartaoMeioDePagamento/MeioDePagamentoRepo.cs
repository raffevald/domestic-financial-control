namespace hfc_api.Repository.Repository.Repository.CartaoMeioDePagamento
{
  public class MeioDePagamentoRepo : IMeioDePagamentoRepo {
    private readonly ApiDbContext _context;
    public MeioDePagamentoRepo(ApiDbContext context) {
       _context = context;
    }

    public async Task CreateMeioDePagamento(MeioDePagamento meioDePagamento) {
      if (meioDePagamento == null) {
        throw new ArgumentNullException(nameof(meioDePagamento));
      }
      await _context.AddAsync(meioDePagamento);
    }

    public void DeleteMeioDePagamento(MeioDePagamento meioDePagamento)
    {
      if (meioDePagamento == null) {
        throw new ArgumentNullException(nameof(meioDePagamento));
      }
      _context.meio_de_pagamento.Remove(meioDePagamento);
    }

    public async Task<MeioDePagamento> GetMeioDePagamentoById(int id) {
      var meioDePagamento = await _context.meio_de_pagamento.FirstOrDefaultAsync(m => m.codigo == id);
      if (meioDePagamento == null) {
        throw new ArgumentNullException(nameof(meioDePagamento));
      }
      return meioDePagamento;
    }

    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }
  }
}
