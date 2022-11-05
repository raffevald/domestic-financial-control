using hfc_api.Data;
using hfc_api.Models.CartaoMeioDePagamento;
using hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento;

namespace hfc_api.Repository.Repository.Repository
{
  public class TipoDeCartaoRepo : ITipoDeCartaoRepo {
    private readonly ApiDbContext _context;
    public TipoDeCartaoRepo(ApiDbContext context) {
       _context = context;
    }

    public async Task CreateTipoDeCartao(TipoDeCartao tipoDeCartao) {
      if (tipoDeCartao == null ) {
        throw new ArgumentNullException(nameof(tipoDeCartao));
      }
      await _context.AddAsync(tipoDeCartao);
    }

    public void DeleteTipoDeCartao(TipoDeCartao tipoDeCartao) {
      if (tipoDeCartao == null ) {
        throw new ArgumentNullException(nameof(tipoDeCartao));
      }
      _context.tipo_de_cartaes.Remove(tipoDeCartao);
    }

    public async Task<IEnumerable<TipoDeCartao>> GetAllTipoDeCartao() {
      return await _context.tipo_de_cartaes!.ToListAsync();
    }

    public async Task<TipoDeCartao> GetTipoDeCartaoId(int id) {
      var tipoDeCartao = await _context.tipo_de_cartaes.FirstOrDefaultAsync(t => t.codigo == id);
      if (tipoDeCartao == null ) {
        throw new ArgumentNullException(nameof(tipoDeCartao));
      };
      return tipoDeCartao;
    }

    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }
  }
}