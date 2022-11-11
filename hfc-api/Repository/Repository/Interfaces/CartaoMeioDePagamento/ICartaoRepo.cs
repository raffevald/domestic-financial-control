using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento
{
  public interface ICartaoRepo {
    Task SaveChangesAsync();
    Task<Cartao> GetCartaoId(int Id);
    Task<IEnumerable<Cartao>> GetAllCartao();
    Task CreateCartao(Cartao cartao);
    void DeleteCartao(Cartao cartao);
    IEnumerable<Cartao> GetAllCartaoByUser(int idUser);
  }
}