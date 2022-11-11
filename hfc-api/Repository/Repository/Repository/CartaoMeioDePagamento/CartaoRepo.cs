using hfc_api.Data;
using hfc_api.Models.CartaoMeioDePagamento;
using hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento;

namespace hfc_api.Repository.Repository.Repository.CartaoMeioDePagamento
{
  public class CartaoRepo : ICartaoRepo {
    private readonly ApiDbContext _context;
    public CartaoRepo(ApiDbContext context) {
       _context = context;
    }

    public async Task CreateCartao(Cartao cartao) {
      if (cartao == null ) {
        throw new ArgumentNullException(nameof(cartao));
      }
      await _context.AddAsync(cartao);
    }

    public void DeleteCartao(Cartao cartao) {
      if (cartao == null ) {
        throw new ArgumentNullException(nameof(cartao));
      }
      _context.cartaes.Remove(cartao);
    }

    public async Task<IEnumerable<Cartao>> GetAllCartao() {
      return await _context.cartaes!.ToListAsync();
    }

    public async Task<Cartao> GetCartaoId(int id) {
      var cartao = await _context.cartaes.FirstOrDefaultAsync(c => c.codigo == id);
      if (cartao == null ) {
        throw new ArgumentNullException(nameof(cartao));
      }
      return cartao;
    }
    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }

    public IEnumerable<Cartao> GetAllCartaoByUser(int idUser) {
      var cartao = _context!.cartaes!
        .FromSqlRaw($"SELECT cartaes.* as cartoes FROM usuarios INNER JOIN cartaes ON usuarios.codigo = cartaes.fk_usuario WHERE usuarios.codigo = {idUser}")
        .ToList();
      if (cartao == null) {
        throw new ArgumentNullException(nameof(cartao));
      }
      return cartao;
    }
  }
}