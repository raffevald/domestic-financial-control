namespace hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento
{
  public interface IMeioDePagamentoRepo {
    Task SaveChangesAsync();
    Task<MeioDePagamento> GetMeioDePagamentoById(int Id);
    // Task<IEnumerable<TipoDeCartao>> GetAllTipoDeCartao();
    Task CreateMeioDePagamento(MeioDePagamento meioDePagamento);
    void DeleteMeioDePagamento(MeioDePagamento meioDePagamento);
  }
}
