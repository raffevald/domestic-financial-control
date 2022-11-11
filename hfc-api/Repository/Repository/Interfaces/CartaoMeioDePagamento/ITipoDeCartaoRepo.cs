using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento
{
  public interface ITipoDeCartaoRepo {
    Task SaveChangesAsync();
    Task<TipoDeCartao> GetTipoDeCartaoId(int Id);
    Task<IEnumerable<TipoDeCartao>> GetAllTipoDeCartao();
    Task CreateTipoDeCartao(TipoDeCartao tipoDeCartao);
    void DeleteTipoDeCartao(TipoDeCartao tipoDeCartao);
    IEnumerable<TipoDeCartao> GetAllTipoDeCartaoByUser(int idUser);
  }
}