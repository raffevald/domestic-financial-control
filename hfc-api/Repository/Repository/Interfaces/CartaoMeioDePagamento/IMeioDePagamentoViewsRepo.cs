using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento
{
  public interface IMeioDePagamentoViewsRepo {
    Task SaveChangesAsync();
    Task<MeioDePagamentoViews> GetMeioDePagamentoViewsId(int Id);
    Task<IEnumerable<MeioDePagamentoViews>> GetAllMeioDePagamentoViews();
    // Task CreateMeioDePagamentoViews(MeioDePagamentoViews meioDePagamentoViews);
    // void DeleteMeioDePagamentoViews(MeioDePagamentoViews meioDePagamentoViews);
  }
}